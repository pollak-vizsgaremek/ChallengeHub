import { PrismaClient } from '../generated/prisma/client.js'

const prisma = new PrismaClient()

export const getAllChallenges = async () => {
  return await prisma.tasks.findMany({
    include: {
      categories: true,
      users_tasks_created_byTousers: {
        select: {
          username: true,
        },
      },
    },
  })
}

export const getDailyChallenges = async (userId, type) => {
  // 1. Get user details
  const user = await prisma.users.findUnique({
    where: { uuid: userId },
  })

  if (!user) throw new Error('User not found')

  const userInterests = await prisma.user_interests.findMany({
    where: { user_id: userId },
  })

  // 2. Determine daily limit based on activity level
  let limit = 3 // Default 'active'
  if (user.activity_level === 'casual') limit = 1
  if (user.activity_level === 'hardcore') limit = 5

  // 3. Check for existing daily challenges
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)

  const existingTasks = await prisma.user_tasks.findMany({
    where: {
      user_id: userId,
      created_at: {
        gte: today,
        lt: tomorrow,
      },
    },
    include: {
      tasks: {
        include: { categories: true },
      },
    },
  })

  if (existingTasks.length > 0) {
    if (type) {
      const activeTypes = [
        'sport',
        'active',
        'physical',
        'movement',
        'aktív',
        'aktiv',
      ]
      return existingTasks
        .filter((ut) => {
          const catType = ut.tasks.categories?.type?.toLowerCase() || ''
          const isActive = activeTypes.includes(catType)
          return type === 'active' ? isActive : !isActive
        })
        .map((ut) => ut.tasks)
    }
    return existingTasks.map((ut) => ut.tasks)
  }

  // 4. Generate new challenges if none exist

  const interestIds = userInterests.map((ui) => ui.category_id)

  const allTasks = await prisma.tasks.findMany({
    where: {
      categories_id: { in: interestIds.length > 0 ? interestIds : undefined },
    },
    include: { categories: true },
  })

  console.log('DEBUG: Found tasks count:', allTasks.length)
  if (allTasks.length > 0) {
    console.log('DEBUG: First task category:', allTasks[0].categories)
    console.log(
      'DEBUG: All categories types:',
      allTasks.map((t) => t.categories?.type)
    )
  }

  // Split into active/custom pools
  const activeTypes = [
    'sport',
    'active',
    'physical',
    'movement',
    'aktív',
    'aktiv',
  ]

  const activePool = allTasks.filter((t) =>
    activeTypes.includes(t.categories?.type?.toLowerCase() || '')
  )
  const customPool = allTasks.filter(
    (t) => !activeTypes.includes(t.categories?.type?.toLowerCase() || '')
  )

  // Random selection
  const selectedTasks = []

  const pickRandom = (pool, count) => {
    if (!pool || pool.length === 0) return []
    const shuffled = [...pool].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
  }

  // 4a. Fetch all specific tasks by type if interest-based pool is too small?

  const dailyActive = pickRandom(activePool, limit)
  const dailyCustom = pickRandom(customPool, limit)

  const tasksToAssign = [...new Set([...dailyActive, ...dailyCustom])]

  // 5. Save to user_tasks
  const operations = tasksToAssign.map((task) =>
    prisma.user_tasks.create({
      data: {
        user_id: userId,
        task_id: task.uuid,
        status: 0, // 0 = Assigned/In Progress
        created_at: new Date(), // Force today
      },
    })
  )

  await prisma.$transaction(operations)

  // 6. Return filtered
  const finalPool = tasksToAssign
  if (type) {
    const activeTypes = [
      'sport',
      'active',
      'physical',
      'movement',
      'aktív',
      'aktiv',
    ]
    return finalPool.filter((t) => {
      const catType = t.categories?.type?.toLowerCase() || ''
      const isActive = activeTypes.includes(catType)
      return type === 'active' ? isActive : !isActive
    })
  }

  return finalPool
}

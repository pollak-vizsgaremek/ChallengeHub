import { PrismaClient } from '../generated/prisma/client.js'
import { v4 as uuidv4 } from 'uuid'

const prisma = new PrismaClient()

// Save user interests
export const saveUserInterests = async (userId, categoryIds, activityLevel) => {
  const operations = categoryIds.map((catId) =>
    prisma.user_interests.create({
      data: {
        uuid: uuidv4(),
        user_id: userId,
        category_id: catId,
      },
    })
  )

  // Update user onboarding status
  operations.push(
    prisma.users.update({
      where: { uuid: userId },
      data: {
        onboarding_completed: true,
        activity_level: activityLevel || 'medium', // Default
      },
    })
  )

  await prisma.$transaction(operations)
  return true
}

// Update user streak
export const updateStreak = async (userId) => {
  const user = await prisma.users.findUnique({
    where: { uuid: userId },
    select: {
      current_streak: true,
      longest_streak: true,
      last_completed_at: true,
    },
  })

  if (!user) return

  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())

  let lastDate = null
  if (user.last_completed_at) {
    lastDate = new Date(user.last_completed_at)
    lastDate = new Date(
      lastDate.getFullYear(),
      lastDate.getMonth(),
      lastDate.getDate()
    )
  }

  // If already completed something today, don't update streak
  if (lastDate && lastDate.getTime() === today.getTime()) {
    return user.current_streak
  }

  const yesterday = new Date(today)
  yesterday.setDate(yesterday.getDate() - 1)

  let newStreak = 1
  // If completed yesterday, increment streak
  if (lastDate && lastDate.getTime() === yesterday.getTime()) {
    newStreak = user.current_streak + 1
  }

  const newLongest = Math.max(newStreak, user.longest_streak)

  await prisma.users.update({
    where: { uuid: userId },
    data: {
      current_streak: newStreak,
      longest_streak: newLongest,
      last_completed_at: now,
    },
  })

  return newStreak
}

// Get user stats
export const getUserStats = async (userId) => {
  const user = await prisma.users.findUnique({
    where: { uuid: userId },
    select: {
      current_streak: true,
      longest_streak: true,
      last_completed_at: true,
    },
  })

  if (!user) {
    throw new Error('User not found')
  }

  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())

  let completedToday = false
  if (user.last_completed_at) {
    const lastDate = new Date(user.last_completed_at)
    const lastDateMidnight = new Date(
      lastDate.getFullYear(),
      lastDate.getMonth(),
      lastDate.getDate()
    )
    if (lastDateMidnight.getTime() === today.getTime()) {
      completedToday = true
    }
  }

  return {
    currentStreak: user.current_streak || 0,
    longestStreak: user.longest_streak || 0,
    completedToday,
  }
}

// Get user balance
export const getUserBalance = async (userId) => {
  const user = await prisma.users.findUnique({
    where: { uuid: userId },
    select: {
      coin: true,
    },
  })

  if (!user) {
    throw new Error('User not found')
  }

  return user.coin
}

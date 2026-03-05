import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient();

// Get all challenges
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
  });
};

// Create challenge
export const createChallenge = async (data, userId) => {
  return await prisma.tasks.create({
    data: {
      name: data.name,
      description: data.description,
      xp: data.xp,
      coin: data.coin,
      categories_id: data.categories_id,
      created_by: userId,
    },
  });
};

// Update challenge
export const updateChallenge = async (uuid, data, userId) => {
  return await prisma.tasks.update({
    where: { uuid },
    data: {
      name: data.name,
      description: data.description,
      xp: data.xp,
      coin: data.coin,
      categories_id: data.categories_id,
      updated_by: userId,
      updated_at: new Date(),
    },
  });
};

// Delete challenge
export const deleteChallenge = async (uuid) => {
  return await prisma.tasks.delete({
    where: { uuid },
  });
};

// Get daily challenges
export const getDailyChallenges = async (userId, type) => {
  // Get user details
  const user = await prisma.users.findUnique({
    where: { uuid: userId },
  });

  if (!user) throw new Error('User not found');

  const userInterests = await prisma.user_interests.findMany({
    where: { user_id: userId },
  });

  // Determine daily limit based on activity level
  let limit = 3; // Default 'active'
  if (user.activity_level === 'casual') limit = 3;
  if (user.activity_level === 'hardcore') limit = 5;

  // Check for existing daily challenges
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  // Check for existing daily challenges
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
  });

  // Return existing challenges if any
  if (existingTasks.length > 0) {
    if (type) {
      const activeTypes = [
        'sport',
        'active',
        'physical',
        'movement',
        'aktív',
        'aktiv',
      ];
      return existingTasks
        .filter((ut) => {
          const catType = ut.tasks.categories?.type?.toLowerCase() || '';
          const isActive = activeTypes.includes(catType);
          return type === 'active' ? isActive : !isActive;
        })
        .map((ut) => ut.tasks);
    }
    return existingTasks.map((ut) => ut.tasks);
  }

  // Generate new challenges if none exist

  const interestIds = userInterests.map((ui) => ui.category_id);

  // Get all tasks based on interests
  const allTasks = await prisma.tasks.findMany({
    where: {
      categories_id: { in: interestIds.length > 0 ? interestIds : undefined },
    },
    include: { categories: true },
  });

  // Split into active/custom pools
  const activeTypes = [
    'sport',
    'active',
    'physical',
    'movement',
    'aktív',
    'aktiv',
  ];

  // Split into active/custom pools
  const activePool = allTasks.filter((t) =>
    activeTypes.includes(t.categories?.type?.toLowerCase() || '')
  );
  const customPool = allTasks.filter(
    (t) => !activeTypes.includes(t.categories?.type?.toLowerCase() || '')
  );

  // Random selection
  const selectedTasks = [];

  const pickRandom = (pool, count) => {
    if (!pool || pool.length === 0) return [];
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const dailyActive = pickRandom(activePool, limit);
  const dailyCustom = pickRandom(customPool, limit);

  const tasksToAssign = [...new Set([...dailyActive, ...dailyCustom])];

  // Save to user_tasks
  const operations = tasksToAssign.map((task) =>
    prisma.user_tasks.create({
      data: {
        user_id: userId,
        task_id: task.uuid,
        status: 0, // 0 = Assigned/In Progress
        created_at: new Date(), // Force today
      },
    })
  );

  await prisma.$transaction(operations);

  // Return filtered
  const finalPool = tasksToAssign;
  if (type) {
    const activeTypes = [
      'sport',
      'active',
      'physical',
      'movement',
      'aktív',
      'aktiv',
    ];
    return finalPool.filter((t) => {
      const catType = t.categories?.type?.toLowerCase() || '';
      const isActive = activeTypes.includes(catType);
      return type === 'active' ? isActive : !isActive;
    });
  }

  return finalPool;
};

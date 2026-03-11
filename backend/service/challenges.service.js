import { PrismaClient } from '../generated/prisma/client.js';
import { validateChallengeWithAI } from './ai-validation.service.js';

const prisma = new PrismaClient();

// Complete challenge proof submission with AI validation
// casual=1, active=3, hardcore=5
export const getRequiredCount = (activityLevel) => {
  switch (activityLevel) {
    case 'casual':
      return 1;
    case 'active':
      return 3;
    case 'hardcore':
      return 5;
    default:
      return 3;
  }
};

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
      difficulty: data.difficulty || 'medium',
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
      difficulty: data.difficulty || 'medium',
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
  let limit = 3;
  if (user.activity_level === 'hardcore') limit = 5; // 5+5=10 challenges

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

  const requiredCount = getRequiredCount(user.activity_level);
  // Összes mai teljesített kihívás (típustól függetlenül)
  const completedTotal = existingTasks.filter((t) => t.status === 1).length;

  // Return existing challenges if exist
  if (existingTasks.length > 0) {
    const activeTypes = [
      'sport',
      'active',
      'physical',
      'movement',
      'aktív',
      'aktiv',
    ];

    const existingCount = existingTasks.length;
    const targetCount = limit * 2;
    const needMore = Math.max(0, targetCount - existingCount);

    // If need more challenges to meet the requirement, try to assign more
    if (needMore > 0) {
      const interestIds = userInterests.map((ui) => ui.category_id);
      const existingTaskIds = existingTasks.map((ut) => ut.task_id);

      const availableTasks = await prisma.tasks.findMany({
        where: {
          categories_id: {
            in: interestIds,
          },
          uuid: { notIn: existingTaskIds }, // ne legyen duplikáció
        },
        include: { categories: true },
      });

      const pickRandom = (pool, count) => {
        if (!pool || pool.length === 0) return [];
        const shuffled = [...pool].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
      };

      const extraTasks = pickRandom(availableTasks, needMore);

      if (extraTasks.length > 0) {
        const ops = extraTasks.map((task) =>
          prisma.user_tasks.create({
            data: {
              user_id: userId,
              task_id: task.uuid,
              status: 0,
              created_at: new Date(),
            },
          })
        );
        const createdExtra = await prisma.$transaction(ops);

        // Again fetch all today's tasks to return the updated list
        const allTodayTasks = await prisma.user_tasks.findMany({
          where: {
            user_id: userId,
            created_at: { gte: today, lt: tomorrow },
          },
          include: {
            tasks: { include: { categories: true } },
          },
        });

        const completedTotalRefresh = allTodayTasks.filter(
          (t) => t.status === 1
        ).length;
        if (type) {
          const filtered = allTodayTasks
            .filter((ut) => {
              const catType = ut.tasks.categories?.type?.toLowerCase() || '';
              const isActive = activeTypes.includes(catType);
              return type === 'active' ? isActive : !isActive;
            })
            .map((ut) => ({
              ...ut.tasks,
              user_task_id: ut.uuid,
              user_task_status: ut.status,
            }));
          return {
            challenges: filtered,
            requiredCount,
            completedTotal: completedTotalRefresh,
          };
        }
        const all = allTodayTasks.map((ut) => ({
          ...ut.tasks,
          user_task_id: ut.uuid,
          user_task_status: ut.status,
        }));
        return {
          challenges: all,
          requiredCount,
          completedTotal: completedTotalRefresh,
        };
      }
    }

    // No need to add more, just return existing
    if (type) {
      const filtered = existingTasks
        .filter((ut) => {
          const catType = ut.tasks.categories?.type?.toLowerCase() || '';
          const isActive = activeTypes.includes(catType);
          return type === 'active' ? isActive : !isActive;
        })
        .map((ut) => ({
          ...ut.tasks,
          user_task_id: ut.uuid,
          user_task_status: ut.status,
        }));
      return { challenges: filtered, requiredCount, completedTotal };
    }
    const all = existingTasks.map((ut) => ({
      ...ut.tasks,
      user_task_id: ut.uuid,
      user_task_status: ut.status,
    }));
    return { challenges: all, requiredCount, completedTotal };
  }

  // Generate new challenges if none exist

  const interestIds = userInterests.map((ui) => ui.category_id);

  // Get all tasks based on interests
  const allTasks = await prisma.tasks.findMany({
    where: {
      categories_id: { in: interestIds },
    },
    include: { categories: true },
  });

  const pickRandom = (pool, count) => {
    if (!pool || pool.length === 0) return [];
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const tasksToAssign = pickRandom(allTasks, limit * 2);

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

  const createdUserTasks = await prisma.$transaction(operations);

  // Map user_task_id-t a task-okhoz
  const taskToUserTaskMap = {};
  createdUserTasks.forEach((ut) => {
    taskToUserTaskMap[ut.task_id] = ut.uuid;
  });

  // Return filtered
  const finalPool = tasksToAssign.map((t) => ({
    ...t,
    user_task_id: taskToUserTaskMap[t.uuid] || null,
    user_task_status: 0,
  }));

  if (type) {
    const activeTypes = [
      'sport',
      'active',
      'physical',
      'movement',
      'aktív',
      'aktiv',
    ];
    const filtered = finalPool.filter((t) => {
      const catType = t.categories?.type?.toLowerCase() || '';
      const isActive = activeTypes.includes(catType);
      return type === 'active' ? isActive : !isActive;
    });
    return { challenges: filtered, requiredCount, completedTotal: 0 };
  }

  return { challenges: finalPool, requiredCount, completedTotal: 0 };
};


export const submitChallengeProof = async (userTaskId, userId, imagePath) => {
  // 1. Check if userTask exists and belongs to user, and is not already completed
  const userTask = await prisma.user_tasks.findUnique({
    where: { uuid: userTaskId },
    include: {
      tasks: {
        include: { categories: true },
      },
    },
  });

  if (!userTask) {
    throw new Error('A kihívás nem található!');
  }

  if (userTask.user_id !== userId) {
    throw new Error('Ez a kihívás nem a te feladatod!');
  }

  if (userTask.status === 1) {
    throw new Error('Ez a kihívás már teljesítve van!');
  }

  // 2. Check for existing pending submission for this task
  const existingSubmission = await prisma.challenge_submissions.findFirst({
    where: {
      user_task_id: userTaskId,
      ai_verdict: 'pending',
    },
  });

  if (existingSubmission) {
    throw new Error(
      'Már van egy feldolgozás alatt álló beküldésed ehhez a kihíváshoz!'
    );
  }

  // 3. Submission create with pending status
  const submission = await prisma.challenge_submissions.create({
    data: {
      user_task_id: userTaskId,
      image_path: imagePath,
      ai_verdict: 'pending',
    },
  });

  // 4. Validate with AI
  const aiResult = await validateChallengeWithAI(imagePath, userTask.tasks);

  // 5. Save AI result to submission
  const updatedSubmission = await prisma.challenge_submissions.update({
    where: { uuid: submission.uuid },
    data: {
      ai_verdict: aiResult.verdict,
      ai_confidence: aiResult.confidence,
      ai_reasoning: aiResult.reasoning,
    },
  });

  // 6. If approved, update user_task status and reward user
  if (aiResult.verdict === 'approved') {
    await prisma.$transaction([
      // user_task státusz frissítése
      prisma.user_tasks.update({
        where: { uuid: userTaskId },
        data: {
          status: 1, // 1 = Completed
          completed_at: new Date(),
        },
      }),
      // XP and coind add to user
      prisma.users.update({
        where: { uuid: userId },
        data: {
          xp: { increment: userTask.tasks.xp },
          coin: { increment: userTask.tasks.coin },
        },
      }),
    ]);

    // Streak update if needed
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const todayTasks = await prisma.user_tasks.findMany({
      where: {
        user_id: userId,
        created_at: {
          gte: today,
          lt: tomorrow,
        },
      },
    });

    const completedCount = todayTasks.filter((t) => t.status === 1).length;
    const currentUser = await prisma.users.findUnique({
      where: { uuid: userId },
      select: { activity_level: true },
    });
    const requiredCount = getRequiredCount(currentUser?.activity_level);

    if (completedCount >= requiredCount) {
      await updateStreak(userId);
    }
  }

  return {
    submission: updatedSubmission,
    aiResult,
    challenge: userTask.tasks,
    rewarded: aiResult.verdict === 'approved',
  };
};

// Update streak based on today's completions
const updateStreak = async (userId) => {
  const user = await prisma.users.findUnique({
    where: { uuid: userId },
    select: {
      current_streak: true,
      longest_streak: true,
      last_completed_at: true,
    },
  });

  if (!user) return;

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const lastCompleted = user.last_completed_at
    ? new Date(
        user.last_completed_at.getFullYear(),
        user.last_completed_at.getMonth(),
        user.last_completed_at.getDate()
      )
    : null;

  let newStreak = user.current_streak;

  if (!lastCompleted) {
    // First time completion
    newStreak = 1;
  } else {
    const diffDays = Math.floor(
      (today - lastCompleted) / (1000 * 60 * 60 * 24)
    );
    if (diffDays === 1) {
      // Completed yesterday, increment streak
      newStreak = user.current_streak + 1;
    } else if (diffDays > 1) {
      // Streak broken, reset to 0
      newStreak = 0;
    }
    // If diffDays === 0, same day completion, do not change streak
  }

  await prisma.users.update({
    where: { uuid: userId },
    data: {
      current_streak: newStreak,
      longest_streak: Math.max(newStreak, user.longest_streak),
      last_completed_at: now,
    },
  });
};

// Get all submissions for a user task
export const getSubmissionsForTask = async (userTaskId, userId) => {
  const userTask = await prisma.user_tasks.findUnique({
    where: { uuid: userTaskId },
  });

  if (!userTask || userTask.user_id !== userId) {
    throw new Error('A kihívás nem található!');
  }

  return await prisma.challenge_submissions.findMany({
    where: { user_task_id: userTaskId },
    orderBy: { submitted_at: 'desc' },
  });
};

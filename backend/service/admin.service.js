import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient();

export const getDashboardStats = async () => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const sevenDaysAgo = new Date(today);
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  // Total Users
  const totalUsers = await prisma.users.count();
  const usersSevenDaysAgo = await prisma.users.count({
    where: {
      registered_at: {
        lt: sevenDaysAgo,
      },
    },
  });

  // Trend
  let userTrend = 0;
  if (usersSevenDaysAgo > 0) {
    userTrend = Math.round(
      ((totalUsers - usersSevenDaysAgo) / usersSevenDaysAgo) * 100
    );
  } else if (totalUsers > 0) {
    userTrend = 100;
  }

  // Today's Completions
  const completionsToday = await prisma.user_tasks.count({
    where: {
      completed_at: {
        gte: today,
      },
    },
  });

  // Completions Trend
  const completionsYesterday = await prisma.user_tasks.count({
    where: {
      completed_at: {
        gte: yesterday,
        lt: today,
      },
    },
  });

  let completionTrend = 0;
  if (completionsYesterday > 0) {
    completionTrend = Math.round(
      ((completionsToday - completionsYesterday) / completionsYesterday) * 100
    );
  } else if (completionsToday > 0) {
    completionTrend = 100;
  }

  return {
    totalUsers: {
      value: totalUsers,
      trend: userTrend,
    },
    todayCompletions: {
      value: completionsToday,
      trend: completionTrend,
    },
  };
};

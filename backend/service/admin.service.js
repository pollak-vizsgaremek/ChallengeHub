import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient();

export const getDashboardStats = async () => {
  const now = new Date();
  const dateStringToday = now.toISOString().split('T')[0];
  const today = new Date(`${dateStringToday}T00:00:00.000Z`);
  
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

  // 3 days activity
  const pastThreeDays = new Date(today);
  pastThreeDays.setDate(pastThreeDays.getDate() - 2);

  const recentUsers = await prisma.users.findMany({
    where: { registered_at: { gte: pastThreeDays } },
    orderBy: { registered_at: 'desc' },
    take: 5,
    select: { username: true, registered_at: true },
  });

  const recentCompletions = await prisma.user_tasks.findMany({
    where: { status: 1, completed_at: { gte: pastThreeDays } },
    orderBy: { completed_at: 'desc' },
    take: 5,
    include: {
      users: { select: { username: true } },
      tasks: { select: { name: true } },
    },
  });

  const recentTickets = await prisma.tickets.findMany({
    where: { created_at: { gte: pastThreeDays } },
    orderBy: { created_at: 'desc' },
    take: 5,
    include: {
      users: { select: { username: true } },
    },
  });

  // Combine and sort activities
  let activities = [];

  recentUsers.forEach((u) => {
    activities.push({
      id: `user-${u.registered_at.getTime()}`,
      type: 'REGISTRATION',
      timestamp: u.registered_at,
      user: u.username,
      content: `Új felhasználó regisztrált: ${u.username}`,
      status: 'Új',
      statusClass: 'info',
    });
  });

  recentCompletions.forEach((c) => {
    activities.push({
      id: `task-${c.completed_at.getTime()}`,
      type: 'TASK_COMPLETION',
      timestamp: c.completed_at,
      user: c.users.username,
      content: `${c.users.username} teljesítette: ${c.tasks.name}`,
      status: 'Kész',
      statusClass: 'success',
    });
  });

  recentTickets.forEach((t) => {
    activities.push({
      id: `ticket-${t.created_at.getTime()}`,
      type: 'TICKET_CREATED',
      timestamp: t.created_at,
      user: t.users.username,
      content: `${t.users.username} jelentett egy hibát: ${t.title}`,
      status: 'Hiba',
      statusClass: 'warning',
    });
  });

  activities.sort((a, b) => b.timestamp - a.timestamp);
  activities = activities.slice(0, 5);

  // Page Views
  let pageViewsToday = 0;
  let pageViewsYesterday = 0;

  const pvTodayRow = await prisma.page_views.findUnique({
    where: { date: today },
  });
  if (pvTodayRow) {
    pageViewsToday = pvTodayRow.count;
  }

  const pvYesterdayRow = await prisma.page_views.findUnique({
    where: { date: yesterday },
  });
  if (pvYesterdayRow) {
    pageViewsYesterday = pvYesterdayRow.count;
  }

  let pageViewTrend = 0;
  if (pageViewsYesterday > 0) {
    pageViewTrend = Math.round(
      ((pageViewsToday - pageViewsYesterday) / pageViewsYesterday) * 100
    );
  } else if (pageViewsToday > 0) {
    pageViewTrend = 100;
  }

  return {
    totalUsers: {
      value: totalUsers,
      trend: userTrend,
    },
    pageViews: {
      value: pageViewsToday,
      trend: pageViewTrend,
    },
    todayCompletions: {
      value: completionsToday,
      trend: completionTrend,
    },
    recentActivities: activities,
  };
};

export const trackPageView = async () => {
  const now = new Date();
  const dateString = now.toISOString().split('T')[0];
  const today = new Date(`${dateString}T00:00:00.000Z`);

  try {
    const existing = await prisma.page_views.findUnique({
      where: { date: today }
    });

    if (existing) {
      await prisma.page_views.update({
        where: { date: today },
        data: { count: { increment: 1 } },
      });
    } else {
      await prisma.page_views.create({
        data: { date: today, count: 1 },
      });
    }
  } catch (error) {
    if (error.code === 'P2002') {
      await prisma.page_views.update({
        where: { date: today },
        data: { count: { increment: 1 } },
      });
    } else {
      throw error;
    }
  }

  return { success: true };
};

// Get all tickets for admin view
export const getAllTickets = async () => {
  return await prisma.tickets.findMany({
    orderBy: { created_at: 'desc' },
    include: {
      users: { select: { username: true } },
    },
  });
};

// Ticket status update function
export const updateTicketStatus = async (uuid, newStatus) => {
  return await prisma.tickets.update({
    where: { uuid: uuid },
    data: { status: newStatus },
  });
};

// Get all users for admin user management view
export const getAllUsers = async () => {
  return await prisma.users.findMany({
    orderBy: { registered_at: 'desc' },
    select: {
      uuid: true,
      username: true,
      email: true,
      xp: true,
      coin: true,
      admin: true,
      is_banned: true,
      registered_at: true,
      activity_level: true,
    },
  });
};

// Update user role (admin/non-admin) function
export const updateUserRole = async (uuid, newAdminStatus) => {
  return await prisma.users.update({
    where: { uuid: uuid },
    data: { admin: newAdminStatus },
  });
};

// Update user ban status (ban/unban) function
export const updateUserBan = async (uuid, banStatus) => {
  return await prisma.users.update({
    where: { uuid: uuid },
    data: { is_banned: banStatus },
  });
};

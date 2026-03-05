import { PrismaClient } from '../generated/prisma/client.js';
import crypto from 'crypto';

const prisma = new PrismaClient();

// Get all categories
export const getAllCategories = async () => {
  return await prisma.categories.findMany();
};

// Create category
export const createCategory = async (data, userId) => {
  return await prisma.categories.create({
    data: {
      uuid: crypto.randomUUID(),
      type: data.type,
      name: data.name,
      created_by: userId,
    },
  });
};

// Update category
export const updateCategory = async (uuid, data, userId) => {
  return await prisma.categories.update({
    where: { uuid },
    data: {
      type: data.type,
      name: data.name,
      updated_by: userId,
      updated_at: new Date(),
    },
  });
};

// Delete category
export const deleteCategory = async (uuid) => {
  // Get all tasks in this category
  const tasks = await prisma.tasks.findMany({
    where: { categories_id: uuid },
    select: { uuid: true },
  });

  const taskUuids = tasks.map((t) => t.uuid);

  if (taskUuids.length > 0) {
    // Delete user_tasks referencing these tasks
    await prisma.user_tasks.deleteMany({
      where: { task_id: { in: taskUuids } },
    });

    // Delete reviews referencing these tasks
    await prisma.reviews.deleteMany({
      where: { task_id: { in: taskUuids } },
    });

    // Delete the tasks themselves
    await prisma.tasks.deleteMany({
      where: { categories_id: uuid },
    });
  }

  // Delete user_interests referencing this category
  await prisma.user_interests.deleteMany({
    where: { category_id: uuid },
  });

  // Finally, delete the category itself
  return await prisma.categories.delete({
    where: { uuid },
  });
};

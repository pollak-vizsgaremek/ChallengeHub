import { PrismaClient } from '../generated/prisma/client.js'

const prisma = new PrismaClient()

// Get all categories
export const getAllCategories = async () => {
  return await prisma.categories.findMany()
}

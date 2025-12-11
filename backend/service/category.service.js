import { PrismaClient } from '../generated/prisma/client.js'

const prisma = new PrismaClient()

export const getAllCategories = async () => {
  return await prisma.categories.findMany()
}

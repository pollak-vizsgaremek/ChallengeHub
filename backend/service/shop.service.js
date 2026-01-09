import { PrismaClient } from '../generated/prisma/client.js'

const prisma = new PrismaClient()

export const getAllShopItems = async (category) => {
  if (category && category !== 'all') {
    return await prisma.shop_items.findMany({
      where: {
        category: category,
      },
    })
  }
  return await prisma.shop_items.findMany()
}

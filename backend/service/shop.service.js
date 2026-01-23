import { PrismaClient } from '../generated/prisma/client.js'

const prisma = new PrismaClient()

// Get all shop items
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

// Purchase item
export const purchaseItem = async (userId, itemId) => {
  return await prisma.$transaction(async (tx) => {
    // Check if user exists and get balance
    const user = await tx.users.findUnique({
      where: { uuid: userId },
    })

    if (!user) {
      throw new Error('Felhasználó nem található!')
    }

    // Check if item exists
    const item = await tx.shop_items.findUnique({
      where: { uuid: itemId },
    })

    if (!item) {
      throw new Error('A termék nem található!')
    }

    // Check if already purchased
    const existingPurchase = await tx.user_shop_items.findUnique({
      where: {
        user_id_shop_item_id: {
          user_id: userId,
          shop_item_id: itemId,
        },
      },
    })

    if (existingPurchase) {
      throw new Error('Ezt a terméket már megvásároltad!')
    }

    // Check balance
    if (user.coin < item.price) {
      throw new Error('Nincs elég pénzed a vásárláshoz!')
    }

    // Deduct coins and create purchase record
    await tx.users.update({
      where: { uuid: userId },
      data: { coin: user.coin - item.price },
    })

    await tx.user_shop_items.create({
      data: {
        user_id: userId,
        shop_item_id: itemId,
      },
    })

    return { message: 'Sikeres vásárlás!', newItem: item }
  })
}

// User's purchased items
export const getUserPurchasedItems = async (userId) => {
  const purchases = await prisma.user_shop_items.findMany({
    where: { user_id: userId },
    select: { shop_item_id: true },
  })
  return purchases.map((p) => p.shop_item_id)
}

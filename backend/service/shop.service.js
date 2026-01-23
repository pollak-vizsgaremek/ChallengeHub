import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient();

// Get all shop items
export const getAllShopItems = async (category) => {
  if (category && category !== 'all') {
    return await prisma.shop_items.findMany({
      where: {
        category: category,
      },
    });
  }
  return await prisma.shop_items.findMany();
};

// Purchase item
export const purchaseItem = async (userId, itemId) => {
  return await prisma.$transaction(async (tx) => {
    // Check if user exists and get balance
    const user = await tx.users.findUnique({
      where: { uuid: userId },
    });

    if (!user) {
      throw new Error('Felhasználó nem található!');
    }

    // Check if item exists
    const item = await tx.shop_items.findUnique({
      where: { uuid: itemId },
    });

    if (!item) {
      throw new Error('A termék nem található!');
    }

    // Check if already purchased
    const existingPurchase = await tx.user_shop_items.findUnique({
      where: {
        user_id_shop_item_id: {
          user_id: userId,
          shop_item_id: itemId,
        },
      },
    });

    if (existingPurchase) {
      throw new Error('Ezt a terméket már megvásároltad!');
    }

    // Check balance
    if (user.coin < item.price) {
      throw new Error('Nincs elég pénzed a vásárláshoz!');
    }

    // Deduct coins and create purchase record
    await tx.users.update({
      where: { uuid: userId },
      data: { coin: user.coin - item.price },
    });

    await tx.user_shop_items.create({
      data: {
        user_id: userId,
        shop_item_id: itemId,
      },
    });

    return { message: 'Sikeres vásárlás!', newItem: item };
  });
};

// User's purchased items
export const getUserPurchasedItems = async (userId) => {
  const purchases = await prisma.user_shop_items.findMany({
    where: { user_id: userId },
    select: { shop_item_id: true },
  });
  return purchases.map((p) => p.shop_item_id);
};

// Sell item (get back 65% of original price)
export const sellItem = async (userId, itemId) => {
  return await prisma.$transaction(async (tx) => {
    // Check if user owns this item
    const purchase = await tx.user_shop_items.findUnique({
      where: {
        user_id_shop_item_id: {
          user_id: userId,
          shop_item_id: itemId,
        },
      },
    });

    if (!purchase) {
      throw new Error('Ez a termék nincs a birtokodban!');
    }

    // Get item details for price
    const item = await tx.shop_items.findUnique({
      where: { uuid: itemId },
    });

    if (!item) {
      throw new Error('A termék nem található!');
    }

    // Check if item is currently active - if so, remove it
    const user = await tx.users.findUnique({
      where: { uuid: userId },
    });

    const updateData = {};
    if (user.active_border_id === itemId) {
      updateData.active_border_id = null;
    }
    if (user.active_name_color_id === itemId) {
      updateData.active_name_color_id = null;
    }

    // Calculate sell price (65% of original)
    const sellPrice = Math.floor(item.price * 0.65);

    // Add coins back and remove purchase record
    await tx.users.update({
      where: { uuid: userId },
      data: {
        coin: user.coin + sellPrice,
        ...updateData,
      },
    });

    await tx.user_shop_items.delete({
      where: {
        user_id_shop_item_id: {
          user_id: userId,
          shop_item_id: itemId,
        },
      },
    });

    return {
      message: 'Sikeres eladás!',
      refund: sellPrice,
      itemName: item.name,
    };
  });
};

// Set active item (border or name color)
export const setActiveItem = async (userId, itemId, type) => {
  // Validate type
  if (!['border', 'name'].includes(type)) {
    throw new Error('Érvénytelen típus!');
  }

  // Check if user owns this item
  const purchase = await prisma.user_shop_items.findUnique({
    where: {
      user_id_shop_item_id: {
        user_id: userId,
        shop_item_id: itemId,
      },
    },
  });

  if (!purchase) {
    throw new Error('Ez a termék nincs a birtokodban!');
  }

  // Check if item exists and matches type
  const item = await prisma.shop_items.findUnique({
    where: { uuid: itemId },
  });

  if (!item || item.category !== type) {
    throw new Error('A termék nem található vagy nem megfelelő típusú!');
  }

  // Update user's active item
  const updateData =
    type === 'border'
      ? { active_border_id: itemId }
      : { active_name_color_id: itemId };

  await prisma.users.update({
    where: { uuid: userId },
    data: updateData,
  });

  return { message: 'Sikeresen beállítva!', item };
};

// Remove active item
export const removeActiveItem = async (userId, type) => {
  if (!['border', 'name'].includes(type)) {
    throw new Error('Érvénytelen típus!');
  }

  const updateData =
    type === 'border'
      ? { active_border_id: null }
      : { active_name_color_id: null };

  await prisma.users.update({
    where: { uuid: userId },
    data: updateData,
  });

  return { message: 'Sikeresen eltávolítva!' };
};

// Get user's active items with full details
export const getActiveItems = async (userId) => {
  const user = await prisma.users.findUnique({
    where: { uuid: userId },
    select: {
      active_border_id: true,
      active_name_color_id: true,
    },
  });

  if (!user) {
    return { border: null, nameColor: null };
  }

  let border = null;
  let nameColor = null;

  if (user.active_border_id) {
    border = await prisma.shop_items.findUnique({
      where: { uuid: user.active_border_id },
    });
  }

  if (user.active_name_color_id) {
    nameColor = await prisma.shop_items.findUnique({
      where: { uuid: user.active_name_color_id },
    });
  }

  return { border, nameColor };
};

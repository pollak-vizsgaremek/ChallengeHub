import { Router } from 'express';
import {
  getAllShopItems,
  purchaseItem,
  getUserPurchasedItems,
  sellItem,
  setActiveItem,
  removeActiveItem,
  getActiveItems,
} from '../service/shop.service.js';

const router = Router();

/**
 * @swagger
 * /shop:
 *   get:
 *     summary: Get all shop items
 *     description: Retrieve all items available in the shop, optionally filtered by category
 *     tags:
 *       - Shop
 *     parameters:
 *       - in: query
 *         name: category
 *         required: false
 *         schema:
 *           type: string
 *         description: Filter items by category (optional)
 *         example: "themes"
 *     responses:
 *       200:
 *         description: Successfully retrieved shop items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: Item ID
 *                     example: 1
 *                   name:
 *                     type: string
 *                     description: Item name
 *                     example: "Dark Theme"
 *                   price:
 *                     type: integer
 *                     description: Item price in coins
 *                     example: 100
 *                   category:
 *                     type: string
 *                     description: Item category
 *                     example: "themes"
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Szerver hiba!"
 */

// Get all shop items
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    const items = await getAllShopItems(category);
    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Szerver hiba!' });
  }
});

/**
 * @swagger
 * /shop/buy:
 *   post:
 *     summary: Purchase an item
 *     description: Purchase a shop item for a user
 *     tags:
 *       - Shop
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - itemId
 *             properties:
 *               userId:
 *                 type: integer
 *                 description: User ID making the purchase
 *                 example: 1
 *               itemId:
 *                 type: integer
 *                 description: Item ID to purchase
 *                 example: 5
 *     responses:
 *       200:
 *         description: Successfully purchased item
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Item purchased successfully"
 *                 purchase:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: Purchase ID
 *                       example: 42
 *       400:
 *         description: Missing parameters or insufficient balance
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Missing userId or itemId"
 */
// Purchase item
router.post('/buy', async (req, res) => {
  try {
    const { userId, itemId } = req.body;
    if (!userId || !itemId) {
      return res
        .status(400)
        .json({ message: 'Hiányzó felhasználó vagy termék!' });
    }
    const result = await purchaseItem(userId, itemId);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
});

/**
 * @swagger
 * /shop/sell:
 *   post:
 *     summary: Sell an item
 *     description: Sell a previously purchased item and get back 65% of the original price
 *     tags:
 *       - Shop
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - itemId
 *             properties:
 *               userId:
 *                 type: string
 *                 description: User UUID
 *                 example: "9a1f2856-5b23-4e96-8245-887f92db2f8e"
 *               itemId:
 *                 type: string
 *                 description: Shop item UUID to sell
 *                 example: "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
 *     responses:
 *       200:
 *         description: Successfully sold item
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Sikeresen eladva!"
 *                 refund:
 *                   type: integer
 *                   description: Amount of coins refunded (65% of original price)
 *                   example: 65
 *       400:
 *         description: Missing parameters or item not owned
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Hiányzó felhasználó vagy termék!"
 */
// Sell item (get back 65% of original price)
router.post('/sell', async (req, res) => {
  try {
    const { userId, itemId } = req.body;
    if (!userId || !itemId) {
      return res
        .status(400)
        .json({ message: 'Hiányzó felhasználó vagy termék!' });
    }
    const result = await sellItem(userId, itemId);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
});

/**
 * @swagger
 * /shop/purchased:
 *   get:
 *     summary: Get user's purchased items
 *     description: Retrieve all items purchased by a specific user
 *     tags:
 *       - Shop
 *     parameters:
 *       - in: query
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *         description: User ID
 *         example: 1
 *     responses:
 *       200:
 *         description: Successfully retrieved purchased items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: Purchase ID
 *                     example: 1
 *                   itemId:
 *                     type: integer
 *                     description: Purchased item ID
 *                     example: 5
 *                   item:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         example: "Dark Theme"
 *                       category:
 *                         type: string
 *                         example: "themes"
 *       400:
 *         description: Missing userId parameter
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Missing userId"
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Server error"
 */
// Get user's purchased items
router.get('/purchased', async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) {
      return res.status(400).json({ message: 'Hiányzó felhasználó!' });
    }
    const purchasedItems = await getUserPurchasedItems(userId);
    res.status(200).json(purchasedItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Szerver hiba!' });
  }
});

/**
 * @swagger
 * /shop/active:
 *   put:
 *     summary: Set active item
 *     description: Set a purchased item as active (border or name color)
 *     tags:
 *       - Shop
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - itemId
 *               - type
 *             properties:
 *               userId:
 *                 type: string
 *                 description: User UUID
 *                 example: "9a1f2856-5b23-4e96-8245-887f92db2f8e"
 *               itemId:
 *                 type: string
 *                 description: Shop item UUID to set as active
 *                 example: "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
 *               type:
 *                 type: string
 *                 enum: [border, name_color]
 *                 description: Type of item to set active
 *                 example: "border"
 *     responses:
 *       200:
 *         description: Successfully set active item
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Sikeresen aktiválva!"
 *       400:
 *         description: Missing parameters, invalid type, or item not owned
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Hiányzó paraméterek!"
 */
// Set active item (border or name color)
router.put('/active', async (req, res) => {
  try {
    const { userId, itemId, type } = req.body;
    if (!userId || !itemId || !type) {
      return res.status(400).json({ message: 'Hiányzó paraméterek!' });
    }
    const result = await setActiveItem(userId, itemId, type);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
});

/**
 * @swagger
 * /shop/active:
 *   delete:
 *     summary: Remove active item
 *     description: Remove an active item (border or name color) from the user
 *     tags:
 *       - Shop
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - type
 *             properties:
 *               userId:
 *                 type: string
 *                 description: User UUID
 *                 example: "9a1f2856-5b23-4e96-8245-887f92db2f8e"
 *               type:
 *                 type: string
 *                 enum: [border, name_color]
 *                 description: Type of active item to remove
 *                 example: "border"
 *     responses:
 *       200:
 *         description: Successfully removed active item
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Sikeresen eltávolítva!"
 *       400:
 *         description: Missing parameters or invalid type
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Hiányzó paraméterek!"
 */
// Remove active item
router.delete('/active', async (req, res) => {
  try {
    const { userId, type } = req.body;
    if (!userId || !type) {
      return res.status(400).json({ message: 'Hiányzó paraméterek!' });
    }
    const result = await removeActiveItem(userId, type);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
});

/**
 * @swagger
 * /shop/active:
 *   get:
 *     summary: Get user's active items
 *     description: Retrieve the currently active border and name color for a user
 *     tags:
 *       - Shop
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: User UUID
 *         example: "9a1f2856-5b23-4e96-8245-887f92db2f8e"
 *     responses:
 *       200:
 *         description: Successfully retrieved active items
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 border:
 *                   type: object
 *                   nullable: true
 *                   description: Active border item or null
 *                   properties:
 *                     uuid:
 *                       type: string
 *                       example: "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
 *                     name:
 *                       type: string
 *                       example: "Arany Keret"
 *                     value:
 *                       type: string
 *                       example: "gold-frame-css-class"
 *                 nameColor:
 *                   type: object
 *                   nullable: true
 *                   description: Active name color item or null
 *                   properties:
 *                     uuid:
 *                       type: string
 *                       example: "b2c3d4e5-f6a7-8901-bcde-f23456789012"
 *                     name:
 *                       type: string
 *                       example: "Arany Név"
 *                     value:
 *                       type: string
 *                       example: "gold-name-css-class"
 *       400:
 *         description: Missing userId parameter
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Hiányzó felhasználó!"
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Szerver hiba!"
 */
// Get user's active items
router.get('/active', async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) {
      return res.status(400).json({ message: 'Hiányzó felhasználó!' });
    }
    const activeItems = await getActiveItems(userId);
    res.status(200).json(activeItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Szerver hiba!' });
  }
});

export default router;

import { Router } from 'express';
import {
  getAllShopItems,
  purchaseItem,
  getUserPurchasedItems,
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

export default router;

import { Router } from 'express';
import { saveUserInterests } from '../service/user.service.js';
import { getUserStats, getUserBalance } from '../service/user.service.js';

const router = Router();

/**
 * @swagger
 * /user/erdelokdes:
 *   post:
 *     summary: Save user interests
 *     description: Save user's category interests and activity level preferences
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - categories
 *             properties:
 *               userId:
 *                 type: integer
 *                 description: User ID
 *                 example: 1
 *               categories:
 *                 type: array
 *                 description: Array of category IDs the user is interested in
 *                 items:
 *                   type: integer
 *                 example: [1, 3, 5]
 *               activityLevel:
 *                 type: string
 *                 description: User's preferred activity level
 *                 example: "moderate"
 *     responses:
 *       200:
 *         description: Successfully saved user interests
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Successfull interests save!"
 *       400:
 *         description: Missing or invalid parameters
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Missing userId, categories or activityLevel"
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
router.post('/erdelokdes', async (req, res) => {
  const { userId, categories, activityLevel } = req.body;

  if (!userId || !categories || !Array.isArray(categories)) {
    return res
      .status(400)
      .json({ message: 'Missing userId, categories or activityLevel' });
  }

  try {
    await saveUserInterests(userId, categories, activityLevel);
    res.status(200).json({ message: 'Successfull interests save!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

/**
 * @swagger
 * /user/stats:
 *   get:
 *     summary: Get user statistics
 *     description: Retrieve statistics for a specific user including completed challenges and points
 *     tags:
 *       - User
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
 *         description: Successfully retrieved user statistics
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 completedChallenges:
 *                   type: integer
 *                   description: Number of completed challenges
 *                   example: 25
 *                 totalPoints:
 *                   type: integer
 *                   description: Total points earned
 *                   example: 1250
 *                 level:
 *                   type: integer
 *                   description: User level
 *                   example: 5
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
router.get('/stats', async (req, res) => {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ message: 'Missing userId' });
  }

  try {
    const stats = await getUserStats(userId);
    res.status(200).json(stats);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

/**
 * @swagger
 * /user/balance:
 *   get:
 *     summary: Get user coin balance
 *     description: Retrieve the current coin balance for a specific user
 *     tags:
 *       - User
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
 *         description: Successfully retrieved user balance
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 coin:
 *                   type: integer
 *                   description: User's coin balance
 *                   example: 500
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
router.get('/balance', async (req, res) => {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ message: 'Missing userId' });
  }

  try {
    const balance = await getUserBalance(userId);
    res.status(200).json({ coin: balance });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;

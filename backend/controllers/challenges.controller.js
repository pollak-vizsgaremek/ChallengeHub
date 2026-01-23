import { Router } from 'express';
import {
  getAllChallenges,
  getDailyChallenges,
} from '../service/challenges.service.js';

const router = Router();

/**
 * @swagger
 * /challenges:
 *   get:
 *     summary: Get all challenges
 *     description: Retrieve all available challenges
 *     tags:
 *       - Challenges
 *     responses:
 *       200:
 *         description: Successfully retrieved all challenges
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: Challenge ID
 *                     example: 1
 *                   name:
 *                     type: string
 *                     description: Challenge name
 *                     example: "Morning Run"
 *                   description:
 *                     type: string
 *                     description: Challenge description
 *                     example: "Run 5km in the morning"
 *                   points:
 *                     type: integer
 *                     description: Points awarded for completion
 *                     example: 50
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
router.get('/', async (req, res) => {
  try {
    const challenges = await getAllChallenges();
    res.status(200).json(challenges);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Szerver hiba!' });
  }
});

/**
 * @swagger
 * /challenges/daily:
 *   get:
 *     summary: Get daily challenges for user
 *     description: Retrieve daily challenges for a specific user, optionally filtered by type
 *     tags:
 *       - Challenges
 *     parameters:
 *       - in: query
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *         description: User ID
 *         example: 1
 *       - in: query
 *         name: type
 *         required: false
 *         schema:
 *           type: string
 *         description: Challenge type filter (optional)
 *         example: "physical"
 *     responses:
 *       200:
 *         description: Successfully retrieved daily challenges
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: Challenge ID
 *                     example: 5
 *                   name:
 *                     type: string
 *                     description: Challenge name
 *                     example: "Daily meditation"
 *                   points:
 *                     type: integer
 *                     description: Points for completion
 *                     example: 30
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
router.get('/daily', async (req, res) => {
  const { userId, type } = req.query;

  if (!userId) {
    return res.status(400).json({ message: 'Hiányzó felhasználó!' });
  }

  try {
    const challenges = await getDailyChallenges(userId, type);
    res.status(200).json(challenges);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Szerver hiba!' });
  }
});

export default router;

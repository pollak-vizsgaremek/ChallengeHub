import { Router } from 'express';
import {
  saveUserInterests,
  getUserStats,
  getUserBalance,
  getUserProfile,
  getUserInterests,
  updateUserInterests,
  checkUserExists,
  updateUserProfile,
  getUserPurchasedItemsWithDetails,
} from '../service/user.service.js';

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
      .json({
        message: 'Hiányzó felhasználó, kategóriák vagy aktivitási szint!',
      });
  }

  try {
    await saveUserInterests(userId, categories, activityLevel);
    res.status(200).json({ message: 'Sikeres mentés!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Szerver hiba!' });
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
    return res.status(400).json({ message: 'Hiányzó felhasználó!' });
  }

  try {
    const stats = await getUserStats(userId);
    res.status(200).json(stats);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Szerver hiba!' });
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

/**
 * @swagger
 * /user/profile:
 *   get:
 *     summary: Get user profile
 *     description: Retrieve user profile data including interests and purchased items
 *     tags:
 *       - User
 *     parameters:
 *       - in: query
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: User UUID
 *         example: "90e6ed36-fab1-4fe0-8b19-74497b70fda9"
 *     responses:
 *       200:
 *         description: Successfully retrieved user profile
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 username:
 *                   type: string
 *                   example: "vargimatix"
 *                 email:
 *                   type: string
 *                   example: "user@example.com"
 *                 xp:
 *                   type: integer
 *                   example: 1250
 *                 coin:
 *                   type: integer
 *                   example: 500
 *                 interests:
 *                   type: array
 *                   items:
 *                     type: object
 *                 purchasedItems:
 *                   type: array
 *                   items:
 *                     type: object
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
router.get('/profile', async (req, res) => {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ message: 'Missing userId' });
  }

  try {
    const profile = await getUserProfile(userId);
    const interests = await getUserInterests(userId);
    const purchasedItems = await getUserPurchasedItemsWithDetails(userId);

    res.status(200).json({
      ...profile,
      interests,
      purchasedItems,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

/**
 * @swagger
 * /user/check-exists:
 *   post:
 *     summary: Check if username or email exists
 *     description: Check if a username or email is already taken by another user (excluding the current user)
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
 *             properties:
 *               userId:
 *                 type: string
 *                 description: Current user's UUID to exclude from check
 *                 example: "90e6ed36-fab1-4fe0-8b19-74497b70fda9"
 *               username:
 *                 type: string
 *                 description: Username to check
 *                 example: "newusername"
 *               email:
 *                 type: string
 *                 description: Email to check
 *                 example: "newemail@example.com"
 *     responses:
 *       200:
 *         description: Successfully checked existence
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 exists:
 *                   type: boolean
 *                   description: Whether username/email exists
 *                   example: false
 *                 field:
 *                   type: string
 *                   description: Which field exists (username or email)
 *                   example: "username"
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
router.post('/check-exists', async (req, res) => {
  const { userId, username, email } = req.body;

  if (!userId) {
    return res.status(400).json({ message: 'Missing userId' });
  }

  try {
    const result = await checkUserExists(userId, username, email);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

/**
 * @swagger
 * /user/profile:
 *   put:
 *     summary: Update user profile
 *     description: Update user's username, email, or password with existence validation
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
 *             properties:
 *               userId:
 *                 type: string
 *                 description: User's UUID
 *                 example: "90e6ed36-fab1-4fe0-8b19-74497b70fda9"
 *               username:
 *                 type: string
 *                 description: New username (optional)
 *                 example: "newusername"
 *               email:
 *                 type: string
 *                 description: New email (optional)
 *                 example: "newemail@example.com"
 *               password:
 *                 type: string
 *                 description: New password (optional)
 *                 example: "newpassword123"
 *     responses:
 *       200:
 *         description: Profile successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Profil sikeresen frissítve!"
 *                 user:
 *                   type: object
 *                   description: Updated user data
 *       400:
 *         description: Missing userId or username/email already exists
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Ez a felhasználónév már foglalt!"
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
router.put('/profile', async (req, res) => {
  const { userId, username, email, password } = req.body;

  if (!userId) {
    return res.status(400).json({ message: 'Missing userId' });
  }

  try {
    // Check if username or email already exists
    if (username || email) {
      const existsCheck = await checkUserExists(userId, username, email);
      if (existsCheck.exists) {
        return res.status(400).json({
          message:
            existsCheck.field === 'username'
              ? 'Ez a felhasználónév már foglalt!'
              : 'Ez az email cím már foglalt!',
        });
      }
    }

    const updatedUser = await updateUserProfile(userId, {
      username,
      email,
      password,
    });
    res.status(200).json({
      message: 'Profil sikeresen frissítve!',
      user: updatedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

/**
 * @swagger
 * /user/interests:
 *   put:
 *     summary: Update user interests
 *     description: Update user's category interests and activity level preferences
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
 *                 type: string
 *                 description: User's UUID
 *                 example: "90e6ed36-fab1-4fe0-8b19-74497b70fda9"
 *               categories:
 *                 type: array
 *                 description: Array of category UUIDs
 *                 items:
 *                   type: string
 *                 example: ["cat-uuid-1", "cat-uuid-2", "cat-uuid-3"]
 *               activityLevel:
 *                 type: string
 *                 description: Activity level (casual, active, hardcore)
 *                 example: "active"
 *     responses:
 *       200:
 *         description: Interests successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Érdeklődési körök sikeresen frissítve!"
 *       400:
 *         description: Missing userId or categories
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Missing userId or categories"
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
router.put('/interests', async (req, res) => {
  const { userId, categories, activityLevel } = req.body;

  if (!userId || !categories || !Array.isArray(categories)) {
    return res.status(400).json({ message: 'Missing userId or categories' });
  }

  try {
    await updateUserInterests(userId, categories, activityLevel);
    res.status(200).json({ message: 'Érdeklődési körök sikeresen frissítve!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;

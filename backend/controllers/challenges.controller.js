import { Router } from 'express';
import {
  getAllChallenges,
  getDailyChallenges,
  createChallenge,
  updateChallenge,
  deleteChallenge,
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

/**
 * @swagger
 * /challenges:
 *   post:
 *     summary: Create a new challenge
 *     description: Create a new challenge under a specific category
 *     tags:
 *       - Challenges
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *               - xp
 *               - coin
 *               - categories_id
 *             properties:
 *               name:
 *                 type: string
 *                 description: Challenge name
 *                 example: "Reggeli futás"
 *               description:
 *                 type: string
 *                 description: Challenge description
 *                 example: "Fuss 5 km-t reggel!"
 *               xp:
 *                 type: integer
 *                 description: XP reward for completion
 *                 example: 50
 *               coin:
 *                 type: integer
 *                 description: Coin reward for completion
 *                 example: 25
 *               categories_id:
 *                 type: string
 *                 description: Category UUID this challenge belongs to
 *                 example: "c4739a8d-a1b0-45c1-9d2e-A00000000001"
 *     responses:
 *       201:
 *         description: Challenge successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 uuid:
 *                   type: string
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *                 xp:
 *                   type: integer
 *                 coin:
 *                   type: integer
 *                 categories_id:
 *                   type: string
 *                 created_at:
 *                   type: string
 *                   format: date-time
 *       400:
 *         description: Missing required fields
 *       500:
 *         description: Server error
 */
router.post('/', async (req, res) => {
  try {
    const { name, description, xp, coin, categories_id } = req.body;
    if (
      !name ||
      !description ||
      xp === undefined ||
      coin === undefined ||
      !categories_id
    ) {
      return res
        .status(400)
        .json({ message: 'Minden mező kitöltése kötelező!' });
    }
    const userId = req.user.uuid;
    const newChallenge = await createChallenge(
      { name, description, xp: Number(xp), coin: Number(coin), categories_id },
      userId
    );
    res.status(201).json(newChallenge);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Szerver hiba a kihívás létrehozásakor!' });
  }
});

/**
 * @swagger
 * /challenges/{uuid}:
 *   put:
 *     summary: Update a challenge
 *     description: Update an existing challenge by UUID
 *     tags:
 *       - Challenges
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: uuid
 *         required: true
 *         schema:
 *           type: string
 *         description: Challenge UUID
 *         example: "task-uuid-123"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *               - xp
 *               - coin
 *               - categories_id
 *             properties:
 *               name:
 *                 type: string
 *                 description: Updated challenge name
 *                 example: "Reggeli futás"
 *               description:
 *                 type: string
 *                 description: Updated challenge description
 *                 example: "Fuss 5 km-t reggel!"
 *               xp:
 *                 type: integer
 *                 description: Updated XP reward
 *                 example: 75
 *               coin:
 *                 type: integer
 *                 description: Updated coin reward
 *                 example: 35
 *               categories_id:
 *                 type: string
 *                 description: Updated category UUID
 *                 example: "c4739a8d-a1b0-45c1-9d2e-A00000000001"
 *     responses:
 *       200:
 *         description: Challenge successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 uuid:
 *                   type: string
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *                 xp:
 *                   type: integer
 *                 coin:
 *                   type: integer
 *                 categories_id:
 *                   type: string
 *                 updated_at:
 *                   type: string
 *                   format: date-time
 *       400:
 *         description: Missing required fields
 *       404:
 *         description: Challenge not found
 *       500:
 *         description: Server error
 */
router.put('/:uuid', async (req, res) => {
  try {
    const { uuid } = req.params;
    const { name, description, xp, coin, categories_id } = req.body;
    if (
      !name ||
      !description ||
      xp === undefined ||
      coin === undefined ||
      !categories_id
    ) {
      return res
        .status(400)
        .json({ message: 'Minden mező kitöltése kötelező!' });
    }
    const userId = req.user.uuid;
    const updatedChallenge = await updateChallenge(
      uuid,
      { name, description, xp: Number(xp), coin: Number(coin), categories_id },
      userId
    );
    res.status(200).json(updatedChallenge);
  } catch (error) {
    console.error(error);
    if (error.code === 'P2025') {
      return res.status(404).json({ message: 'A kihívás nem található!' });
    }
    res.status(500).json({ message: 'Szerver hiba a kihívás frissítésekor!' });
  }
});

/**
 * @swagger
 * /challenges/{uuid}:
 *   delete:
 *     summary: Delete a challenge
 *     description: Delete a challenge by UUID. Fails if the challenge has associated user_tasks or reviews.
 *     tags:
 *       - Challenges
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: uuid
 *         required: true
 *         schema:
 *           type: string
 *         description: Challenge UUID
 *         example: "task-uuid-123"
 *     responses:
 *       200:
 *         description: Challenge successfully deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Kihívás sikeresen törölve"
 *       400:
 *         description: Challenge cannot be deleted due to existing references
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "A kihívás nem törölhető, mert már hozzá van rendelve felhasználókhoz vagy értékelésekhez!"
 *       404:
 *         description: Challenge not found
 *       500:
 *         description: Server error
 */
router.delete('/:uuid', async (req, res) => {
  try {
    const { uuid } = req.params;
    await deleteChallenge(uuid);
    res.status(200).json({ message: 'Kihívás sikeresen törölve' });
  } catch (error) {
    console.error(error);
    if (error.code === 'P2003') {
      return res.status(400).json({
        message:
          'A kihívás nem törölhető, mert már hozzá van rendelve felhasználókhoz vagy értékelésekhez!',
      });
    }
    if (error.code === 'P2025') {
      return res.status(404).json({ message: 'A kihívás nem található!' });
    }
    res.status(500).json({ message: 'Szerver hiba a kihívás törlésekor!' });
  }
});

export default router;

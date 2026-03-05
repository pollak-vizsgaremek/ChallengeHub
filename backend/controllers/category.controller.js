import { Router } from 'express';
import {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from '../service/category.service.js';

const router = Router();

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Get all categories
 *     description: Retrieve all available challenge categories
 *     tags:
 *       - Categories
 *     responses:
 *       200:
 *         description: Successfully retrieved all categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: Category ID
 *                     example: 1
 *                   name:
 *                     type: string
 *                     description: Category name
 *                     example: "Sports"
 *                   description:
 *                     type: string
 *                     description: Category description
 *                     example: "Physical activities and exercises"
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
    const categories = await getAllCategories();
    res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Create a new category
 *     description: Create a new challenge category (requires authentication)
 *     tags:
 *       - Categories
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
 *               - type
 *             properties:
 *               name:
 *                 type: string
 *                 description: Category name
 *                 example: "Sport és Fitnesz"
 *               type:
 *                 type: string
 *                 description: Category type
 *                 example: "physical"
 *     responses:
 *       201:
 *         description: Category successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 uuid:
 *                   type: string
 *                   example: "c4739a8d-a1b0-45c1-9d2e-A00000000001"
 *                 name:
 *                   type: string
 *                   example: "Sport és Fitnesz"
 *                 type:
 *                   type: string
 *                   example: "physical"
 *                 created_at:
 *                   type: string
 *                   format: date-time
 *       400:
 *         description: Missing name or type
 *       500:
 *         description: Server error
 */
router.post('/', async (req, res) => {
  try {
    const { name, type } = req.body;
    if (!name || !type) {
      return res
        .status(400)
        .json({ message: 'Név és típus megadása kötelező!' });
    }
    const userId = req.user.uuid; // from authMiddleware
    const newCategory = await createCategory({ name, type }, userId);
    res.status(201).json(newCategory);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Szerver hiba a kategória létrehozásakor!' });
  }
});

/**
 * @swagger
 * /categories/{uuid}:
 *   put:
 *     summary: Update a category
 *     description: Update an existing challenge category by UUID
 *     tags:
 *       - Categories
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: uuid
 *         required: true
 *         schema:
 *           type: string
 *         description: Category UUID
 *         example: "c4739a8d-a1b0-45c1-9d2e-A00000000001"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - type
 *             properties:
 *               name:
 *                 type: string
 *                 description: Updated category name
 *                 example: "Sport és Fitnesz"
 *               type:
 *                 type: string
 *                 description: Updated category type
 *                 example: "physical"
 *     responses:
 *       200:
 *         description: Category successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 uuid:
 *                   type: string
 *                 name:
 *                   type: string
 *                 type:
 *                   type: string
 *                 updated_at:
 *                   type: string
 *                   format: date-time
 *       400:
 *         description: Missing name or type
 *       404:
 *         description: Category not found
 *       500:
 *         description: Server error
 */
router.put('/:uuid', async (req, res) => {
  try {
    const { uuid } = req.params;
    const { name, type } = req.body;
    if (!name || !type) {
      return res
        .status(400)
        .json({ message: 'Név és típus megadása kötelező!' });
    }
    const userId = req.user.uuid;
    const updatedCategory = await updateCategory(uuid, { name, type }, userId);
    res.status(200).json(updatedCategory);
  } catch (error) {
    console.error(error);
    // Be robust against item not found: Prisma will throw an error if uuid doesn't exist
    if (error.code === 'P2025') {
      return res.status(404).json({ message: 'A kategória nem található!' });
    }
    res
      .status(500)
      .json({ message: 'Szerver hiba a kategória frissítésekor!' });
  }
});

/**
 * @swagger
 * /categories/{uuid}:
 *   delete:
 *     summary: Delete a category
 *     description: Delete a category and all associated challenges, user_tasks, reviews, and user_interests
 *     tags:
 *       - Categories
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: uuid
 *         required: true
 *         schema:
 *           type: string
 *         description: Category UUID
 *         example: "c4739a8d-a1b0-45c1-9d2e-A00000000001"
 *     responses:
 *       200:
 *         description: Category and associated data successfully deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Kategória sikeresen törölve"
 *       404:
 *         description: Category not found
 *       500:
 *         description: Server error
 */
router.delete('/:uuid', async (req, res) => {
  try {
    const { uuid } = req.params;
    await deleteCategory(uuid);
    res.status(200).json({ message: 'Kategória sikeresen törölve' });
  } catch (error) {
    console.error(error);
    if (error.code === 'P2025') {
      return res.status(404).json({ message: 'A kategória nem található!' });
    }
    res.status(500).json({ message: 'Szerver hiba a kategória törlésekor!' });
  }
});

export default router;

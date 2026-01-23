import { Router } from 'express';
import { getAllCategories } from '../service/category.service.js';

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

export default router;

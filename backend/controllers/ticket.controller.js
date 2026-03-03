import { Router } from 'express';
import { createTicket } from '../service/ticket.service.js';

const router = Router();

/**
 * @swagger
 * /tickets:
 *   post:
 *     summary: Create a new ticket
 *     description: Submit a new bug report or support ticket
 *     tags:
 *       - Tickets
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - type
 *               - title
 *               - description
 *               - priority
 *             properties:
 *               type:
 *                 type: string
 *                 description: Type of issue
 *                 example: "Bug"
 *               title:
 *                 type: string
 *                 description: Short title of the issue
 *                 example: "Login button not working"
 *               description:
 *                 type: string
 *                 description: Detailed description of the issue
 *                 example: "When I click login, nothing happens."
 *               priority:
 *                 type: string
 *                 enum: [Alacsony, Közepes, Magas, Kritikus]
 *                 description: Priority level
 *                 example: "Magas"
 *     responses:
 *       201:
 *         description: Ticket created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Hibajegy sikeresen létrehozva!"
 *                 ticket:
 *                   type: object
 *                   properties:
 *                     uuid:
 *                       type: string
 *                       example: "ticket-uuid-123"
 *                     status:
 *                       type: string
 *                       example: "open"
 *       400:
 *         description: Missing parameters or invalid data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Hiányzó adatok!"
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
 * */
router.post('/', async (req, res) => {
  try {
    const { type, title, description, priority } = req.body;
    const userId = req.user.id;

    if (!type || !title || !description || !priority) {
      return res.status(400).json({ message: 'Hiányzó adatok!' });
    }

    const result = await createTicket({
      userId,
      type,
      title,
      description,
      priority,
    });
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Szerver hiba!' });
  }
});

export default router;

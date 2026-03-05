import { Router } from 'express';
import {
  getDashboardStats,
  getAllTickets,
  updateTicketStatus,
  getAllUsers,
  updateUserRole,
  updateUserBan,
} from '../service/admin.service.js';

const router = Router();

/**
 * @swagger
 * /admin/stats:
 *   get:
 *     summary: Get admin dashboard statistics
 *     description: Retrieve statistics for the admin dashboard (Total Users, Active Challenges, Today's Completions)
 *     tags:
 *       - Admin
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved dashboard stats
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalUsers:
 *                   type: object
 *                   properties:
 *                     value:
 *                       type: integer
 *                       example: 1248
 *                     trend:
 *                       type: integer
 *                       example: 12
 *                 todayCompletions:
 *                   type: object
 *                   properties:
 *                     value:
 *                       type: integer
 *                       example: 342
 *                     trend:
 *                       type: integer
 *                       example: 18
 *       403:
 *         description: Forbidden - User is not an admin
 *       500:
 *         description: Server error
 */
router.get('/stats', async (req, res) => {
  try {
    const stats = await getDashboardStats();
    res.status(200).json(stats);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Szerver hiba!' });
  }
});

/**
 * @swagger
 * /admin/tickets:
 *   get:
 *     summary: Get all tickets
 *     description: Retrieve all support tickets (admin only)
 *     tags:
 *       - Admin
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved all tickets
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   uuid:
 *                     type: string
 *                     example: "ticket-uuid-123"
 *                   type:
 *                     type: string
 *                     example: "Bug"
 *                   title:
 *                     type: string
 *                     example: "Login button not working"
 *                   description:
 *                     type: string
 *                     example: "When I click login, nothing happens."
 *                   priority:
 *                     type: string
 *                     example: "Magas"
 *                   status:
 *                     type: string
 *                     example: "open"
 *                   created_at:
 *                     type: string
 *                     format: date-time
 *       403:
 *         description: Forbidden - User is not an admin
 *       500:
 *         description: Server error
 */
router.get('/tickets', async (req, res) => {
  try {
    const tickets = await getAllTickets();
    res.status(200).json(tickets);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Szerver hiba a hibajegyek lekérdezésekor!' });
  }
});

/**
 * @swagger
 * /admin/tickets/{id}/status:
 *   patch:
 *     summary: Update ticket status
 *     description: Update the status of a specific ticket (admin only)
 *     tags:
 *       - Admin
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Ticket UUID
 *         example: "ticket-uuid-123"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - status
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [open, in_progress, resolved, closed]
 *                 description: New ticket status
 *                 example: "resolved"
 *     responses:
 *       200:
 *         description: Ticket status successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 uuid:
 *                   type: string
 *                 status:
 *                   type: string
 *                   example: "resolved"
 *       400:
 *         description: Missing status parameter
 *       403:
 *         description: Forbidden - User is not an admin
 *       500:
 *         description: Server error
 */
router.patch('/tickets/:id/status', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({ message: 'A státusz megadása kötelező!' });
  }

  try {
    const updatedTicket = await updateTicketStatus(id, status);
    res.status(200).json(updatedTicket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Szerver hiba a hibajegy frissítésekor!' });
  }
});

/**
 * @swagger
 * /admin/users:
 *   get:
 *     summary: Get all users
 *     description: Retrieve all registered users (admin only)
 *     tags:
 *       - Admin
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved all users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   uuid:
 *                     type: string
 *                     example: "90e6ed36-fab1-4fe0-8b19-74497b70fda9"
 *                   username:
 *                     type: string
 *                     example: "vargimatix"
 *                   email:
 *                     type: string
 *                     example: "user@example.com"
 *                   xp:
 *                     type: integer
 *                     example: 1250
 *                   coin:
 *                     type: integer
 *                     example: 500
 *                   admin:
 *                     type: integer
 *                     example: 0
 *                   is_banned:
 *                     type: boolean
 *                     example: false
 *                   registered_at:
 *                     type: string
 *                     format: date-time
 *       403:
 *         description: Forbidden - User is not an admin
 *       500:
 *         description: Server error
 */
router.get('/users', async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Szerver hiba a felhasználók lekérdezésekor!' });
  }
});

/**
 * @swagger
 * /admin/users/{id}/role:
 *   patch:
 *     summary: Update user role
 *     description: Set or remove admin role for a specific user (admin only)
 *     tags:
 *       - Admin
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User UUID
 *         example: "90e6ed36-fab1-4fe0-8b19-74497b70fda9"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - admin
 *             properties:
 *               admin:
 *                 type: integer
 *                 enum: [0, 1]
 *                 description: Admin status (0 = normal user, 1 = admin)
 *                 example: 1
 *     responses:
 *       200:
 *         description: User role successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 uuid:
 *                   type: string
 *                 username:
 *                   type: string
 *                 admin:
 *                   type: integer
 *                   example: 1
 *       400:
 *         description: Missing admin parameter
 *       403:
 *         description: Forbidden - User is not an admin
 *       500:
 *         description: Server error
 */
router.patch('/users/:id/role', async (req, res) => {
  const { id } = req.params;
  const { admin } = req.body; // expected 0 or 1

  if (admin === undefined) {
    return res
      .status(400)
      .json({ message: 'Az admin státusz megadása kötelező!' });
  }

  try {
    const updatedUser = await updateUserRole(id, admin);
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Szerver hiba a jogosultság frissítésekor!' });
  }
});

/**
 * @swagger
 * /admin/users/{id}/ban:
 *   patch:
 *     summary: Ban or unban user
 *     description: Set the ban status for a specific user (admin only)
 *     tags:
 *       - Admin
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User UUID
 *         example: "90e6ed36-fab1-4fe0-8b19-74497b70fda9"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - is_banned
 *             properties:
 *               is_banned:
 *                 type: boolean
 *                 description: Ban status (true = banned, false = unbanned)
 *                 example: true
 *     responses:
 *       200:
 *         description: User ban status successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 uuid:
 *                   type: string
 *                 username:
 *                   type: string
 *                 is_banned:
 *                   type: boolean
 *                   example: true
 *       400:
 *         description: Missing is_banned parameter
 *       403:
 *         description: Forbidden - User is not an admin
 *       500:
 *         description: Server error
 */
router.patch('/users/:id/ban', async (req, res) => {
  const { id } = req.params;
  const { is_banned } = req.body;

  if (is_banned === undefined) {
    return res
      .status(400)
      .json({ message: 'A kitiltás státusz megadása kötelező!' });
  }

  try {
    const updatedUser = await updateUserBan(id, is_banned);
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Szerver hiba a kitiltás frissítésekor!' });
  }
});

export default router;

import { Router } from 'express';
import { getDashboardStats } from '../service/admin.service.js';

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
  // Admin check
  if (!req.user || !req.user.isAdmin) {
    return res.status(403).json({
      message: 'Hozzáférés megtagadva! Csak adminisztrátorok részére.',
    });
  }

  try {
    const stats = await getDashboardStats();
    res.status(200).json(stats);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Szerver hiba!' });
  }
});

export default router;

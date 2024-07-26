import { stats } from '@/middlewares/stats.middleware';
import { Router } from 'express';

export const statsRouter = Router();

/**
 * @openapi
 * /stats:
 *   get:
 *     summary: Retrieve statistics for various endpoints
 *     responses:
 *       200:
 *         description: Statistics of endpoint hits
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               additionalProperties:
 *                 type: integer
 *               example:
 *                 '/': 37
 *                 '/about': 4
 *                 '/healthcheck': 10
 */
statsRouter.get('/stats', (req, res) => {
  return res.json(stats);
});

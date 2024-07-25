import { Router } from 'express';

export const healthcheckRouter = Router();

/**
 * @openapi
 * /healthcheck:
 *   get:
 *     summary: Health check endpoint
 *     responses:
 *       '200':
 *         description: Health check successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 */
healthcheckRouter.get('/healthcheck', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

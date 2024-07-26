import { Router } from 'express';
import { getCats } from './cats.service';

export const catsRouter = Router();

/**
 * @openapi
 * /cats:
 *   get:
 *     summary: Retrieve a list of cats
 *     responses:
 *       200:
 *         description: A list of cats
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *               example:
 *                 - id: 1
 *                   name: Whiskers
 *                 - id: 2
 *                   name: Mittens
 *                 - id: 3
 *                   name: Shadow
 */
catsRouter.get('/cats', async (req, res) => {
  const cats = await getCats();

  return res.json(cats);
});

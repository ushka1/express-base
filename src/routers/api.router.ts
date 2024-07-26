import { Router } from 'express';
import { catsRouter } from './cats/cats.router';
import { healthcheckRouter } from './healthcheck/healthcheck.router';
import { statsRouter } from './stats/stats.router';

export const apiRouter = Router();

apiRouter.use(catsRouter);

apiRouter.use(healthcheckRouter);
apiRouter.use(statsRouter);

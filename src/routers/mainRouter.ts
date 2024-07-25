import { Router } from 'express';
import { healthcheckRouter } from './healthcheck/healthcheckRouter';

export const mainRouter = Router();

mainRouter.use(healthcheckRouter);

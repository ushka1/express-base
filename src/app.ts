import express from 'express';
import { setupSwagger } from './config/swagger';
import { errorHandler } from './middlewares/error.handler';
import { statsMiddleware } from './middlewares/stats.middleware';
import { apiRouter } from './routers/api.router';

export const app = express();

app.use(express.json());
app.use(statsMiddleware);

setupSwagger(app);
app.use(apiRouter);

app.use(errorHandler);

import express from 'express';
import { setupSwagger } from './config/swagger';
import { errorHandler } from './middlewares/errorHandler';
import { mainRouter } from './routers/mainRouter';

export const app = express();

app.use(express.json());

setupSwagger(app);

app.use(mainRouter);
app.use(errorHandler);

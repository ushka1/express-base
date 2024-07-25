import express from 'express';
import { setupGracefulShutdown } from './config/gracefulShutdown';
import { logger } from './config/logger';
import { setupSwagger } from './config/swagger';
import { errorHandler } from './middlewares/errorHandler';
import { healthcheckRouter } from './routers/healthcheck/healthcheckRouter';

const app = express();
const port = process.env.PORT;

app.use(express.json());

setupSwagger(app);

app.use(healthcheckRouter);
app.use(errorHandler);

(async () => {
  const server = app.listen(port);
  logger.info(`Server running on http://localhost:${port}.`);
  logger.info(
    `API docs available at http://localhost:${process.env.PORT}/api-docs.`,
  );

  setupGracefulShutdown(server);
  logger.info('Graceful shutdown setup.');
})();

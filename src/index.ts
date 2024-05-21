import express from 'express';
import { setupGracefulShutdown } from './config/gracefulShutdown';
import { logger } from './config/logger';
import { setupSwagger } from './config/swagger';
import { errorHandler } from './controllers/errorController';
import { serverStatusRouter } from './routers/serverStatusRouter';

const app = express();
const port = process.env.PORT;

app.use(express.json());

setupSwagger(app);

app.use(serverStatusRouter);
app.use(errorHandler);

(async () => {
  const server = app.listen(port);
  logger.info(`Server running on http://localhost:${port}.`);

  setupGracefulShutdown(server);
  logger.info('Graceful shutdown setup.');
})();

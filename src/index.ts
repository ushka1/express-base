import { app } from './app';
import { setupGracefulShutdown } from './config/gracefulShutdown';
import { logger } from './config/logger';

const port = process.env.PORT;

(async () => {
  const server = app.listen(port);
  logger.info(`Server running on http://localhost:${port}.`);
  logger.info(
    `API docs available at http://localhost:${process.env.PORT}/api-docs.`
  );

  setupGracefulShutdown(server);
  logger.info('Graceful shutdown setup.');
})();

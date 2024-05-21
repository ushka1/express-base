import { Express } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { logger } from './logger';

const openapiSpecification = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Discussor API',
      version: '1.0.0',
      description: 'API for Discussor, a discussion platform.',
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}`,
      },
    ],
  },
  apis: ['./src/**/*.ts', './src/**/*.yaml'],
  failOnErrors: true,
});

export function setupSwagger(app: Express) {
  app.get('/api-docs.json', (req, res) => {
    res.json(openapiSpecification);
  });

  app.use(
    '/api-docs',
    swaggerUI.serve,
    swaggerUI.setup(openapiSpecification, {
      customSiteTitle: 'Discussor API',
    }),
  );

  logger.info(
    `API docs available at http://localhost:${process.env.PORT}/api-docs.`,
  );
}

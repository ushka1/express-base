import { Express } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

const openapiSpecification = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express Ts-Node Base API',
      version: '1.0.0',
      description:
        'API for Express Ts-Node Base, a simple Express.js starter project.',
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
      customSiteTitle: 'Express Ts-Node Base API',
    }),
  );
}

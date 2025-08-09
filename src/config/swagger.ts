import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'City Explorer Documentation',
      version: '1.0.0',
      description: 'API documentation for city explorer backend',
    },
    servers: [
      {
        url: process.env.NODE_ENV === 'production' 
          ? `${process.env.API_BASE_URL}` 
          : 'http://localhost:3000',
        description: process.env.NODE_ENV === 'production' ? 'Production server' : 'Development server',
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        BearerAuth: [],
      },
    ],
  },
  apis: ['dist/**/*.js', 'src/**/*.ts'],
};

const specs = swaggerJsdoc(options);

const swaggerOptions = {
  explorer: true,
  swaggerOptions: {
    url: '/swagger.json',
  },
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: 'City Explorer API Documentation',
  customfavIcon: '/favicon.ico',
};

export { swaggerUi, specs, swaggerOptions };
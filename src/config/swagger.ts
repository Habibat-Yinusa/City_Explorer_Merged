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
        url:  process.env.NODE_ENV === 'production' ? `${process.env.API_BASE_URL}` : 'http://localhost:3000',
        description: 'Production server',
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

export { swaggerUi, specs };

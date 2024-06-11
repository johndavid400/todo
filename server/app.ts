import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import swaggerDocs from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import * as jwt from 'jsonwebtoken';
import { verifyTokenMiddleware } from './middleware/auth';
import { auth } from "./routes/auth";
import { users } from "./routes/users";
import { categories } from "./routes/categories";
import { lists } from "./routes/lists";
import { list_items } from "./routes/list_items";

dotenv.config();

const options = {
  failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Test API",
      version: "1.0.0"
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Local development server"
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          in: "header",
          name: "Authorization",
          description: "Bearer token to access api endpoints",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ]
  },
  apis: ['./routes/**.ts', `${__dirname}/routes/*.ts`],
};
const swaggerSpec = swaggerDocs(options);
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express. json());
app.use(morgan('combined'))

app.get('/', (req: Request, res: Response) => {
  res.send('Home page');
});

app.get('/health', (req: Request, res: Response) => {
  res.json({"status": "ok"});
});

// public routes
app.use("/auth", auth);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// jwt protected routes:
app.use("*", verifyTokenMiddleware);
app.use("/users", users);
app.use("/categories", categories);
app.use("/lists", lists);
app.use("/list_items", list_items);

app.use("/swagger.json", (req, res) =>
  res.json(swaggerSpec).status(200)
);

export { app };

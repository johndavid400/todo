import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import swaggerDocs from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import * as jwt from 'jsonwebtoken';

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

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  if (req.path === "/auth/login" && req.method == "POST") return next();
  if (req.path === "/users" && req.method == "POST") return next();
  if (req.path === "/categories" && req.method == "GET") return next();
  if (req.path.match("docs")) return next();
  if (req.path.match("swagger")) return next();
 
  const splitAuth = req.headers.authorization?.split(" ");
  const token = splitAuth && splitAuth.length >= 2 && splitAuth[1];
  if (token) {
    try {
      const tokenVerified = jwt.verify(token, `${process.env.SECRET_KEY}`);
      if (tokenVerified) {
        console.log(tokenVerified);
        res.locals.user = tokenVerified.sub;
        return next();
      }
    } catch {
      return res.sendStatus(401);
    }
  }
  return res.sendStatus(401);
};

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express. json());
app.use(morgan('combined'))

app.get('/', (req: Request, res: Response) => {
  res.send('Home page');
});

app.use("/auth", auth);
app.all("*", verifyToken);
app.use("/users", users);
app.use("/categories", categories);
app.use("/lists", lists);
app.use("/list_items", list_items);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use("/swagger.json", (req, res) =>
  res.json(swaggerSpec).status(200)
);

export { app };

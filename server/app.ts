import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { Request, Response } from 'express';
import morgan from 'morgan';
import swaggerDocs from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";


import { users } from "./routes/users";
import { categories } from "./routes/categories";
import { lists } from "./routes/lists";
import { list_items } from "./routes/list_items";

dotenv.config();

const options = {
  failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Todo App',
      version: '1.0.0',
    },
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

app.use("/users", users);
app.use("/categories", categories);
app.use("/lists", lists);
app.use("/list_items", list_items);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

export { app };

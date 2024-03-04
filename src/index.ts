import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { Request, Response } from 'express';
import morgan from 'morgan';

import { users } from "./routes/users";
import { categories } from "./routes/categories";
import { lists } from "./routes/lists";
import { list_items } from "./routes/list_items";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: true }))
app.use(express. json());
app.use(morgan('combined'))

app.get('/', (req: Request, res: Response) => {
  res.send('Home page');
});

app.use("/", users);
app.use("/", categories);
app.use("/", lists);
app.use("/", list_items);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

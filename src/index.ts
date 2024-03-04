import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { users } from "./routes/users";
import { categories } from "./routes/categories";
import { lists } from "./routes/lists";
import { list_items } from "./routes/list_items";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use("/", users);
app.use("/", categories);
app.use("/", lists);
app.use("/", list_items);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

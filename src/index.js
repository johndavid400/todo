const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  const name = req.query.name || '';
  const body = 'Sup ' + name + '- using Express + TypeScript ';
  res.send(body);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

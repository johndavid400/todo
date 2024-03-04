import { Router, Request, Response } from 'express';
export const lists = Router();

lists.get('/lists', (req: Request, res: Response) => {
  res.send('hey');
});

lists.get('/lists/:id', (req: Request, res: Response) => {
  res.send(`list with id ${req.params.id}`);
});


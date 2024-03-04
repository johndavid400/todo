import { Router, Request, Response } from 'express';
export const categories = Router();

categories.get('/categories', (req: Request, res: Response) => {
  res.send('Categories');
});

categories.get('/categories/:id', (req: Request, res: Response) => {
  res.send(`Category with id ${req.params.id}`);
});


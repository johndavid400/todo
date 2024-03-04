import { Router, Request, Response } from 'express';
export const categories = Router();

categories.get('/categories', (req: Request, res: Response) => {
  res.send('Categories');
});

categories.get('/categories/new', (req: Request, res: Response) => {
  res.send('New Category form');
});

categories.post('/categories', (req: Request, res: Response) => {
  res.send('Create new Category');
});

categories.get('/categories/:id', (req: Request, res: Response) => {
  res.send(`Category with id ${req.params.id}`);
});

categories.get('/categories/:id/edit', (req: Request, res: Response) => {
  res.send(`Edit form for Category ${req.params.id}`);
});

categories.patch('/categories/:id', (req: Request, res: Response) => {
  res.send(`Update Category (PATCH) ${req.params.id}`);
});

categories.put('/categories/:id', (req: Request, res: Response) => {
  res.send(`Update Category (PUT) ${req.params.id}`);
});

categories.delete('/categories/:id', (req: Request, res: Response) => {
  res.send(`Delete Category ${req.params.id}`);
});

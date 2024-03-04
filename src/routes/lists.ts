import { Router, Request, Response } from 'express';
export const lists = Router();

lists.get('/lists', (req: Request, res: Response) => {
  res.send('Lists');
});

lists.get('/lists/new', (req: Request, res: Response) => {
  res.send('New List form');
});

lists.post('/lists', (req: Request, res: Response) => {
  res.send('Create new List');
});

lists.get('/lists/:id', (req: Request, res: Response) => {
  res.send(`List with id ${req.params.id}`);
});

lists.get('/lists/:id/edit', (req: Request, res: Response) => {
  res.send(`Edit form for List ${req.params.id}`);
});

lists.patch('/lists/:id', (req: Request, res: Response) => {
  res.send(`Update List (PATCH) ${req.params.id}`);
});

lists.put('/lists/:id', (req: Request, res: Response) => {
  res.send(`Update List (PUT) ${req.params.id}`);
});

lists.delete('/lists/:id', (req: Request, res: Response) => {
  res.send(`Delete List ${req.params.id}`);
});

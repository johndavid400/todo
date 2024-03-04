import { Router, Request, Response } from 'express';
export const list_items = Router();

list_items.get('/list_items', (req: Request, res: Response) => {
  res.send('ListItems');
});

list_items.get('/list_items/new', (req: Request, res: Response) => {
  res.send('New ListItem form');
});

list_items.post('/list_items', (req: Request, res: Response) => {
  res.send('Create new ListItem');
});

list_items.get('/list_items/:id', (req: Request, res: Response) => {
  res.send(`ListItem with id ${req.params.id}`);
});

list_items.get('/list_items/:id/edit', (req: Request, res: Response) => {
  res.send(`Edit form for ListItem ${req.params.id}`);
});

list_items.patch('/list_items/:id', (req: Request, res: Response) => {
  res.send(`Update ListItem (PATCH) ${req.params.id}`);
});

list_items.put('/list_items/:id', (req: Request, res: Response) => {
  res.send(`Update ListItem (PUT) ${req.params.id}`);
});

list_items.delete('/list_items/:id', (req: Request, res: Response) => {
  res.send(`Delete ListItem ${req.params.id}`);
});

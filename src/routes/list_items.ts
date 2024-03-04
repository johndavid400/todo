import { Router, Request, Response } from 'express';
export const list_items = Router();

list_items.get('/list_items', (req: Request, res: Response) => {
  res.send('List Items');
});

list_items.get('/list_items/:id', (req: Request, res: Response) => {
  res.send(`list_item with id ${req.params.id}`);
});


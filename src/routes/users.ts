import { Router, Request, Response } from 'express';
export const users = Router();

users.get('/users', (req: Request, res: Response) => {
  res.send('Users');
});

users.get('/users/:id', (req: Request, res: Response) => {
  res.send(`User with id ${req.params.id}`);
});


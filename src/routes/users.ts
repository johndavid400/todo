import { Router, Request, Response } from 'express';
export const users = Router();

users.get('/users', (req: Request, res: Response) => {
  res.send('Users');
});

users.get('/users/new', (req: Request, res: Response) => {
  res.send('New User form');
});

users.post('/users', (req: Request, res: Response) => {
  res.send('Create new User');
});

users.get('/users/:id', (req: Request, res: Response) => {
  res.send(`User with id ${req.params.id}`);
});

users.get('/users/:id/edit', (req: Request, res: Response) => {
  res.send(`Edit form for User ${req.params.id}`);
});

users.patch('/users/:id', (req: Request, res: Response) => {
  res.send(`Update User (PATCH) ${req.params.id}`);
});

users.put('/users/:id', (req: Request, res: Response) => {
  res.send(`Update User (PUT) ${req.params.id}`);
});

users.delete('/users/:id', (req: Request, res: Response) => {
  res.send(`Delete User ${req.params.id}`);
});

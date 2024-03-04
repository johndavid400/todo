import { Request, Response } from 'express';

export function getUsers(req: Request, res: Response) {
  return res.json({ message: 'Get Users' }).status(200);
}

export function getUser(req: Request, res: Response) {
  return res.json({ message: 'Get User', params: req.params }).status(200);
}

export function createUser(req: Request, res: Response) {
  return res.json({ message: 'Create User' }).status(200);
}

export function updateUser(req: Request, res: Response) {
  return res.json({ message: 'Update User', params: req.params }).status(200);
}

export function deleteUser(req: Request, res: Response) {
  return res.json({ message: 'Delete User', params: req.params }).status(200);
}

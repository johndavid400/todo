import { Request, Response } from 'express';

export function getLists(req: Request, res: Response) {
  return res.json({ message: 'Get Lists' }).status(200);
}

export function getList(req: Request, res: Response) {
  return res.json({ message: 'Get List', params: req.params }).status(200);
}

export function createList(req: Request, res: Response) {
  return res.json({ message: 'Create List' }).status(200);
}

export function updateList(req: Request, res: Response) {
  return res.json({ message: 'Update List', params: req.params }).status(200);
}

export function deleteList(req: Request, res: Response) {
  return res.json({ message: 'Delete List', params: req.params }).status(200);
}

import { Request, Response } from 'express';

export function getListItems(req: Request, res: Response) {
  return res.json({ message: 'Get ListItems' }).status(200);
}

export function getListItem(req: Request, res: Response) {
  return res.json({ message: 'Get ListItem', params: req.params }).status(200);
}

export function createListItem(req: Request, res: Response) {
  return res.json({ message: 'Create ListItem' }).status(200);
}

export function updateListItem(req: Request, res: Response) {
  return res.json({ message: 'Update ListItem', params: req.params }).status(200);
}

export function deleteListItem(req: Request, res: Response) {
  return res.json({ message: 'Delete ListItem', params: req.params }).status(200);
}

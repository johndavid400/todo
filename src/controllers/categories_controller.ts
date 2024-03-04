import { Request, Response } from 'express';

export function getCategories(req: Request, res: Response) {
  return res.json({ message: 'Get Categories' }).status(200);
}

export function getCategory(req: Request, res: Response) {
  return res.json({ message: 'Get Category', params: req.params }).status(200);
}

export function createCategory(req: Request, res: Response) {
  return res.json({ message: 'Create Category' }).status(200);
}

export function updateCategory(req: Request, res: Response) {
  return res.json({ message: 'Update Category', params: req.params }).status(200);
}

export function deleteCategory(req: Request, res: Response) {
  return res.json({ message: 'Delete Category', params: req.params }).status(200);
}

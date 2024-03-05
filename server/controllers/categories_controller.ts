import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getCategories(req: Request, res: Response) {
  const categories = await prisma.categories.findMany();
  return res.json(categories).status(200);
}

export async function getCategory(req: Request, res: Response) {
  const category = await prisma.categories.findFirst({
    where: {
      id: parseInt(req.params.id)
    },
  });
  return res.json(category).status(200);
}

export function createCategory(req: Request, res: Response) {
  return res.json({ message: 'Create Category', body: req.body }).status(200);
}

export function updateCategory(req: Request, res: Response) {
  return res.json({ message: 'Update Category', params: req.params }).status(200);
}

export function deleteCategory(req: Request, res: Response) {
  return res.json({ message: 'Delete Category', params: req.params }).status(200);
}

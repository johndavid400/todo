import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

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

export async function createCategory(req: Request, res: Response) {
  const { title, color_code } = req.body;
  const category = await prisma.categories.create({
    data: {
      title: title,
      color_code: color_code,
      user_id: 1
    },
  });
  // TODO figure out how to dynamically set the user_id
  return res.json(category).status(200);
}

export async function updateCategory(req: Request, res: Response) {
  const { id } = req.params;
  const { title, color_code } = req.body;

  try {
    const category = await prisma.categories.update({
      where: { id: Number(id) },
      data: {
        title: title,
        color_code: color_code
      },
    })
    return res.json(category).status(200);
  } catch (error) {
    res.json({ error: `Category with ID ${id} does not exist in the database` })
  }
}

export async function deleteCategory(req: Request, res: Response) {
  const { id } = req.params;
  const category = await prisma.categories.delete({
    where: {
      id: Number(id)
    },
  })
  return res.json(category).status(200);
}

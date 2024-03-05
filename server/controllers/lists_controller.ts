import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export async function getLists(req: Request, res: Response) {
  const lists = await prisma.lists.findMany();
  return res.json(lists).status(200);
}

export async function getList(req: Request, res: Response) {
  const list = await prisma.lists.findFirst({
    where: {
      id: parseInt(req.params.id)
    },
  });
  return res.json(list).status(200);
}

export async function createList(req: Request, res: Response) {
  const { title, category_id } = req.body;
  const list = await prisma.lists.create({
    data: {
      title: title,
      category_id: 1,
      user_id: 1,
      created_at: new Date()
    },
  });
  // TODO figure out how to dynamically set the user_id
  return res.json(list).status(200);
}

export async function updateList(req: Request, res: Response) {
  const { id } = req.params;
  const { title, category_id } = req.body;

  try {
    const list = await prisma.lists.update({
      where: { id: Number(id) },
      data: {
        title: title,
        category_id: category_id
      },
    })
    return res.json(list).status(200);
  } catch (error) {
    res.json({ error: `List with ID ${id} does not exist in the database` })
  }
}

export async function deleteList(req: Request, res: Response) {
  const { id } = req.params;
  const list = await prisma.lists.delete({
    where: {
      id: Number(id)
    },
  })
  return res.json(list).status(200);
}

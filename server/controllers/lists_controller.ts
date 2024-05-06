import { Request, Response } from 'express';
import { prisma } from '../utils/prisma';
import * as listService from '../services/list_service';

export async function getLists(req: Request, res: Response) {
  const lists = await listService.getLists();
  return res.json(lists).status(200);
}

export async function getList(req: Request, res: Response) {
  const list = await listService.getList(Number(req.params.id));
  return res.json(list).status(200);
}

export async function createList(req: Request, res: Response) {
  const { title, category_id } = req.body;
  const userId = res.locals.user || null;
  const list = await prisma.lists.create({
    data: {
      title: title || undefined,
      category_id: category_id || undefined,
      user_id: userId || undefined,
      created_at: new Date()
    },
  });
  return res.json(list).status(200);
}

export async function updateList(req: Request, res: Response) {
  const { id } = req.params;
  const { title, category_id } = req.body;

  try {
    const list = await prisma.lists.update({
      where: { id: Number(id) },
      data: {
        title: title || undefined,
        category_id: category_id || undefined
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

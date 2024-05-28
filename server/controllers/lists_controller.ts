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

  const list = await listService.createList(Number(res.locals.user), title, Number(category_id));

  return res.json(list).status(200);
}

export async function updateList(req: Request, res: Response) {
  try {
    const list = await listService.updateList(Number(req.params.id), req.body);
    return res.json(list).status(200);
  } catch (error) {
    res.json({ error: `List with ID ${req.params.id} does not exist in the database` })
  }
}

export async function deleteList(req: Request, res: Response) {
  const list = await listService.deleteList(Number(req.params.id));
  return res.json(list).status(200);
}

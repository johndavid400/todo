import { Request, Response } from 'express';
import { prisma } from '../utils/prisma';
import * as listItemService from '../services/list_item_service';

export async function getListItems(req: Request, res: Response) {
  const list_items = await listItemService.getListItems();
  return res.json(list_items).status(200);
}

export async function getListItem(req: Request, res: Response) {
  const list_item = await listItemService.getListItem(Number(req.params.id));
  return res.json(list_item).status(200);
}

export async function createListItem(req: Request, res: Response) {
  const { list_id } = req.params;
  const { title, position } = req.body;
  const list_item = await prisma.list_items.create({
    data: {
      title: title || undefined,
      position: Number(position),
      list_id: Number(list_id),
      created_at: new Date() || undefined
    },
  });
  // TODO figure out how to dynamically set the user_id
  return res.json(list_item).status(200);
}

export async function updateListItem(req: Request, res: Response) {
  const { id } = req.params;
  const { title, position, completed } = req.body;
  const completed_at = completed ? new Date() : null;

  try {
    const list_item = await prisma.list_items.update({
      where: { id: Number(id) },
      data: {
        title: title || undefined,
        position: Number(position) || undefined,
        completed_at: completed_at || undefined
      },
    })
    return res.json(list_item).status(200);
  } catch (error) {
    res.json(error)
    //res.json({ error: `ListItem with ID ${id} does not exist in the database` })
  }
}

export async function deleteListItem(req: Request, res: Response) {
  const { id } = req.params;
  const list_item = await prisma.list_items.delete({
    where: {
      id: Number(id)
    },
  })
  return res.json(list_item).status(200);
}

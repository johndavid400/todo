import { Request, Response } from 'express';
import { prisma } from '../utils/prisma';
import * as listItemService from '../services/list_item_service';

export async function getListItems(req: Request, res: Response) {
  try {
    if (req.query.list_id) {
      const list_items = await listItemService.getListItemsByListId(Number(req.query.list_id));
      return res.json(list_items).status(200);
    }
    else {
      const list_items = await listItemService.getListItems();
      return res.json(list_items).status(200);
    }
  } catch (error) {
    res.json(error)
  }
}

export async function getListItem(req: Request, res: Response) {
  try {
    const list_item = await listItemService.getListItem(Number(req.params.id));
    return res.json(list_item).status(200);
  } catch (error) {
    res.json(error)
  }
}

export async function createListItem(req: Request, res: Response) {
  const { list_id } = req.params;
  const { title, position } = req.body;

  try {
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
  } catch (error) {
    res.json(error)
  }
}

export async function updateListItem(req: Request, res: Response) {
  const { id } = req.params;
  const { title, position, completed } = req.body;
  let completed_at = null;

  if (completed === 'true') {
    completed_at = new Date();
  }

  try {
    const list_item = await prisma.list_items.update({
      where: { id: Number(id) },
      data: {
        title: title || undefined,
        position: Number(position) || undefined,
        completed_at: completed_at
      },
    })
    return res.json(list_item).status(200);
  } catch (error) {
    res.json(error)
  }
}

export async function deleteListItem(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const list_item = await prisma.list_items.delete({
      where: {
        id: Number(id)
      },
    })
    return res.json(list_item).status(200);
  } catch (error) {
    res.json(error)
  }
}

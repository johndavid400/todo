import { prisma } from '../utils/prisma';

export async function getListItems() {
  return await prisma.lists.findMany();
}

export async function getListItem(id: number) {
  return await prisma.list_items.findFirst({
    where: {
      id: id
    },
  });
}

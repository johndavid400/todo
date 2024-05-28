import { prisma } from '../utils/prisma';

export async function getLists() {
  return await prisma.lists.findMany();
}

export async function getList(id: number) {
  return await prisma.lists.findFirst({
    where: {
      id: id
    },
  });
}

export async function createList(userId: number, title: string, categoryId: number) {
  return await prisma.lists.create({
    data: {
      title: title,
      category_id: Number(categoryId),
      user_id: Number(userId),
      created_at: new Date()
    },
  });
}

export async function updateList(id: number, body: any) {
  const { title, category_id } = body;

  return await prisma.lists.update({
    where: { id: Number(id) },
    data: {
      title: title || undefined,
      category_id: category_id || undefined
    },
  })
}

export async function deleteList(id: number) {
  await prisma.list_items.deleteMany({
    where: {
      list_id: Number(id)
    },
  })

  return await prisma.lists.delete({
    where: {
      id: Number(id)
    },
  })
}


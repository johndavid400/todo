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

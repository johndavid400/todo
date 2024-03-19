import { prisma } from '../utils/prisma';

export async function getCategories() {
  return await prisma.categories.findMany();
}

export async function getCategory(id: number) {
  return await prisma.categories.findFirst({
    where: {
      id: id
    },
  });
}

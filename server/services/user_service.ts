import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getUsers() {
  return await prisma.users.findMany();
}

export async function getUser(userId: number) {
  return await prisma.users.findFirst({
    where: {
      id: userId
    },
  });
}

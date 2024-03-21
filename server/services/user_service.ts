import { prisma } from '../utils/prisma';
import * as bcrypt from 'bcryptjs';

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

export async function createUser(email: string, password: string) {
  const hashedPassword = await bcrypt.hash(password, 10);

  return await prisma.users.create({
    data: {
      email: email,
      encrypted_password: hashedPassword
    },
  });
}


export async function updateUser(id: Number, password: string) {
  const hashedPassword = await bcrypt.hash(password, 10);

  return await prisma.users.update({
    where: { id: Number(id) },
    data: {
      encrypted_password: hashedPassword
    },
  });
}

export async function deleteUser(id: Number) {
  return await prisma.users.delete({
    where: {
      id: Number(id)
    },
  });
}

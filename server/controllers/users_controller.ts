import { Request, Response } from 'express';
import { prisma } from '../utils/prisma';
import * as bcrypt from 'bcryptjs';
import * as userService from '../services/user_service';

export async function getUsers(req: Request, res: Response) {
  const users = await userService.getUsers();
  return res.json(users).status(200);
}

export async function getUser(req: Request, res: Response) {
  const user = await userService.getUser(Number(req.params.id));
  return res.json(user).status(200);
}

export async function createUser(req: Request, res: Response) {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.users.create({
    data: {
      email: email,
      encrypted_password: hashedPassword
    },
  });
  return res.json(user).status(200);
}

export async function updateUser(req: Request, res: Response) {
  const { id } = req.params;
  const { password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.users.update({
      where: { id: Number(id) },
      data: {
        encrypted_password: hashedPassword
      },
    })
    return res.json(user).status(200);
  } catch (error) {
    res.json({ error: `User with ID ${id} does not exist in the database` })
  }
}

export async function deleteUser(req: Request, res: Response) {
  const { id } = req.params;
  const user = await prisma.users.delete({
    where: {
      id: Number(id)
    },
  })
  return res.json(user).status(200);
}

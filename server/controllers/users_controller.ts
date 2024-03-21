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
  const user = userService.createUser(email, password);
  return res.json(user).status(200);
}

export async function updateUser(req: Request, res: Response) {
  const { id } = req.params;
  const { password } = req.body;

  try {
    const user = userService.updateUser(Number(id), password);
    return res.json(user).status(200);
  } catch (error) {
    res.json({ error: `User with ID ${id} does not exist in the database` })
  }
}

export async function deleteUser(req: Request, res: Response) {
  const { id } = req.params;
  const user = userService.deleteUser(Number(id));
  return res.json(user).status(200);
}

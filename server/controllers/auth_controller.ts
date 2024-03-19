import { Request, Response } from 'express';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { prisma } from '../utils/prisma';

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  const user = await prisma.users.findFirst({
    where: {
      email: email
    },
  });
  if (user) {
    const passwordsMatch = await bcrypt.compare(password, user.encrypted_password);
    if (passwordsMatch) {
      // generate and return JWT
      const accessToken = jwt.sign({ sub: user.id, email: user.email }, `${process.env.SECRET_KEY}`, {
        expiresIn: 1200
      });
      return res.json(accessToken).status(200);
    }
    else {
      return res.json({"response": "Invalid login credentials: Password does not match"}).status(400);
    }
  }
  else {
    return res.json({"response": "Invalid login credentials: User not found."}).status(400);
  }
}

export async function logout(req: Request, res: Response) {
  // invalidate JWT
  return res.json({"response": "success"}).status(201);
}

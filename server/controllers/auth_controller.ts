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
        expiresIn: 604800
      });
      return res.status(200).json(accessToken);
    }
    else {
      return res.status(400).json({"response": "Invalid login credentials: Password does not match"});
    }
  }
  else {
    return res.status(400).json({"response": "Invalid login credentials: User not found."});
  }
}

export async function logout(req: Request, res: Response) {
  // invalidate JWT
  return res.status(201).json({"response": "success"});
}

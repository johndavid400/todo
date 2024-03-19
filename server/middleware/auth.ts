import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

export async function verifyTokenMiddleware(req: Request, res: Response, next: NextFunction){
  if (process.env.NODE_ENV === 'test') {
    res.locals.user_id = 1;
    return next();
  }

  if (req.path === "/auth/login" && req.method == "POST") return next();
  if (req.path === "/users" && req.method == "POST") return next();
  if (req.path === "/categories" && req.method == "GET") return next();
  if (req.path.match("docs")) return next();
  if (req.path.match("swagger")) return next();
 
  const splitAuth = req.headers.authorization?.split(" ");
  const token = splitAuth && splitAuth.length >= 2 && splitAuth[1];
  if (token) {
    try {
      const tokenVerified = jwt.verify(token, `${process.env.SECRET_KEY}`);
      if (tokenVerified) {
        console.log(tokenVerified);
        res.locals.user = tokenVerified.sub;
        return next();
      }
    } catch {
      return res.sendStatus(401);
    }
  }
  return res.sendStatus(401);
};

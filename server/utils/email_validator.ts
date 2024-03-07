import { Request, Response, NextFunction } from 'express';
import { body } from 'express-validator';

export function emailValidator(req: Request, res: Response, next: NextFunction) {
  body('email')
    .isEmail()
    .isLength({min: 5})
    .trim()
}

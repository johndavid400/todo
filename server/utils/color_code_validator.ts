import { Request, Response, NextFunction } from 'express';
import { body } from 'express-validator';

export function colorCodeValidator(req: Request, res: Response, next: NextFunction) {
  body('title')
    .isString()
    .isLength({min: 4})
    .trim()
}

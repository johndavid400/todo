import { Request, Response, NextFunction } from 'express';
import { body } from 'express-validator';

export function positionValidator(req: Request, res: Response, next: NextFunction) {
  body('position')
    .isString()
    .isLength({min: 3})
    .trim()
}

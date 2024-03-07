import { Request, Response, NextFunction } from 'express';
import { body } from 'express-validator';

export function categoryIdValidator(req: Request, res: Response, next: NextFunction) {
  body('category_id')
    .isInt()
}

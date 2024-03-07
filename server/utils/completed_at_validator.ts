import { Request, Response, NextFunction } from 'express';
import { body } from 'express-validator';

export function completedAtValidator(req: Request, res: Response, next: NextFunction) {
  body('completed_at')
    .isString()
    .trim()
}

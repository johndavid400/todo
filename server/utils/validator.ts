import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

export function validateRequest(req: Request, res: Response) {
  const error = validationResult(req);
  const hasError = !error.isEmpty();

  if (hasError) {
    return res.status(400).json({ error: error.array() });
  } else {
    return;
  }
}

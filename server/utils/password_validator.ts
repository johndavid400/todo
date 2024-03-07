import { Request, Response, NextFunction } from 'express';
import { body } from 'express-validator';

export function passwordValidator(req: Request, res: Response, next: NextFunction) {
  body('confirm_password')
    .trim()
    .isLength({ min: 4, max: 16 })
    .withMessage('Password must be between 4 to 16 characters')
    .custom(async(confirmPassword, { req }) => {
      const password = req.body.password;
      // throw error if password and password_confirmation do not match
    if (password !== confirmPassword) {
      throw new Error('Passwords must match');
    }
  })
}


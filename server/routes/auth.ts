import { Router, Request, Response } from 'express';
import * as authController from '../controllers/auth_controller';
import { param, query, body } from 'express-validator';
import { validateRequest } from '../utils/validator';

/**
 * @swagger
 * tags:
 *   name: Auth
 */
export const auth = Router();

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login
 *     tags: [Auth]
 *     requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                required: true
 *              password:
 *                type: string
 *                required: true
 *     responses:
 *       200:
 *         description: Successfully logged in.
 */
auth.route('/login').post([], validateRequest, authController.login);

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: Logout
 *     tags: [Auth]
 *     responses:
 *       201:
 *         description: Successfully logged out.
 */
auth.route('/logout').post(authController.logout);

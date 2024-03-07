import { Router, Request, Response } from 'express';
import * as usersController from '../controllers/users_controller';
import { param, query, body } from 'express-validator';
import { validateRequest } from '../utils/validator';
import { emailValidator } from '../utils/email_validator';
import { passwordValidator } from '../utils/password_validator';

/**
 * @swagger
 * tags:
 *   name: Users
 */
export const users = Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Returns an array of users.
 */
users.route('/').get(usersController.getUsers);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     tags: [Users]
 *     parameters:
 *      - name: id
 *        in: path
 *        type: integer
 *        description: The ID of the user.
 *     responses:
 *       200:
 *         description: Returns an array of users.
 */
users.route('/:id').get(usersController.getUser);

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
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
 *              password_confirmation:
 *                type: string
 *                required: true
 *     responses:
 *       200:
 *         description: Returns the new user.
 */
users.route('/').post(
  [emailValidator, passwordValidator],
  validateRequest,
  usersController.createUser
);

/**
 * @swagger
 * /users/{id}:
 *   patch:
 *     summary: Update a user
 *     tags: [Users]
 *     parameters:
 *      - name: id
 *        in: path
 *        type: integer
 *        description: The ID of the user.
 *     requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              password:
 *                type: string
 *                required: true
 *              password_confirmation:
 *                type: string
 *                required: true
 *     responses:
 *       200:
 *         description: returns the user object.
 */
users.route('/:id').patch(
  [emailValidator, passwordValidator],
  validateRequest,
  usersController.updateUser
);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update a user
 *     tags: [Users]
 *     parameters:
 *      - name: id
 *        in: path
 *        type: integer
 *        description: The ID of the user.
 *     requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              password:
 *                type: string
 *                required: true
 *              password_confirmation:
 *                type: string
 *                required: true
 *     responses:
 *       200:
 *         description: returns the user object.
 */
users.route('/:id').put(
  [emailValidator, passwordValidator],
  validateRequest,
  usersController.updateUser
);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a user
 *     tags: [Users]
 *     parameters:
 *      - name: id
 *        in: path
 *        type: integer
 *        description: The ID of the user.
 *     responses:
 *       204:
 *         description: no content.
 */
users.route('/:id').delete(usersController.deleteUser);

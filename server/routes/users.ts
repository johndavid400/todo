import { Router, Request, Response } from 'express';
import * as usersController from '../controllers/users_controller';

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
 *     parameters:
 *      - name: email
 *        in: body
 *        type: string
 *        description: The email of the user.
 *      - name: password
 *        in: body
 *        type: string
 *        description: The password of the user.
 *      - name: password_confirmation
 *        in: body
 *        type: string
 *        description: The password (confirmation) of the user.
 *     responses:
 *       200:
 *         description: Returns the new user.
 */
users.route('/').post(usersController.createUser);

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
 *     responses:
 *       200:
 *         description: returns the user object.
 */
users.route('/:id').patch(usersController.updateUser);

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
 *     responses:
 *       200:
 *         description: returns the user object.
 */
users.route('/:id').put(usersController.updateUser);

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

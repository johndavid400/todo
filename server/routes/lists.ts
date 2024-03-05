import { Router, Request, Response } from 'express';
import * as listsController from '../controllers/lists_controller';

/**
 * @swagger
 * tags:
 *   name: Lists
 */
export const lists = Router();

/**
 * @swagger
 * /lists:
 *   get:
 *     summary: Get all lists
 *     tags: [Lists]
 *     responses:
 *       200:
 *         description: Returns an array of lists.
 */
lists.route('/').get(listsController.getLists);

/**
 * @swagger
 * /lists/{id}:
 *   get:
 *     summary: Get a list by ID
 *     tags: [Lists]
 *     parameters:
 *      - name: id
 *        in: path
 *        type: integer
 *        description: The ID of the list.
 *     responses:
 *       200:
 *         description: Returns an array of lists.
 */
lists.route('/:id').get(listsController.getList);

/**
 * @swagger
 * /lists:
 *   post:
 *     summary: Create a new list
 *     tags: [Lists]
 *     parameters:
 *      - name: title
 *        in: path
 *        type: string
 *        description: The title of the list.
 *      - name: category_id
 *        in: path
 *        type: integer
 *        description: The category_id of the list.
 *     responses:
 *       200:
 *         description: Returns the new list.
 */
lists.route('/').post(listsController.createList);

/**
 * @swagger
 * /lists/{id}:
 *   patch:
 *     summary: Update a list
 *     tags: [Lists]
 *     parameters:
 *      - name: id
 *        in: path
 *        type: integer
 *        description: The ID of the list.
 *     responses:
 *       200:
 *         description: returns the list object.
 */
lists.route('/:id').patch(listsController.updateList);

/**
 * @swagger
 * /lists/{id}:
 *   put:
 *     summary: Update a list
 *     tags: [Lists]
 *     parameters:
 *      - name: id
 *        in: path
 *        type: integer
 *        description: The ID of the list.
 *     responses:
 *       200:
 *         description: returns the list object.
 */
lists.route('/:id').put(listsController.updateList);

/**
 * @swagger
 * /lists/{id}:
 *   delete:
 *     summary: Delete a list
 *     tags: [Lists]
 *     parameters:
 *      - name: id
 *        in: path
 *        type: integer
 *        description: The ID of the list.
 *     responses:
 *       204:
 *         description: no content.
 */
lists.route('/:id').delete(listsController.deleteList);

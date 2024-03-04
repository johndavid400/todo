import { Router, Request, Response } from 'express';
import * as ListItemsController from '../controllers/list_items_controller';

/**
 * @swagger
 * tags:
 *   name: ListItems
 */
export const list_items = Router();

/**
 * @swagger
 * /list_items:
 *   get:
 *     summary: Get all list_items
 *     tags: [ListItems]
 *     responses:
 *       200:
 *         description: Returns an array of list_items.
 */
list_items.route('/').get(ListItemsController.getListItems);

/**
 * @swagger
 * /list_items/{id}:
 *   get:
 *     summary: Get a list_item by ID
 *     tags: [ListItems]
 *     parameters:
 *      - name: id
 *        in: path
 *        type: integer
 *        description: The ID of the list_item.
 *     responses:
 *       200:
 *         description: Returns an array of list_items.
 */
list_items.route('/:id').get(ListItemsController.getListItem);

/**
 * @swagger
 * /list_items:
 *   post:
 *     summary: Create a new list_item
 *     tags: [ListItems]
 *     parameters:
 *      - name: title
 *        in: path
 *        type: string
 *        description: The title of the list_item.
 *      - name: position
 *        in: path
 *        type: integer
 *        description: The position of the list_item.
 *      - name: completed
 *        in: path
 *        type: boolean
 *        description: Boolean value representing if the list_item is complete or not.
 *     responses:
 *       200:
 *         description: Returns the new list_item.
 */
list_items.route('/').post(ListItemsController.createListItem);

/**
 * @swagger
 * /list_items/{id}:
 *   patch:
 *     summary: Update a list_item
 *     tags: [ListItems]
 *     parameters:
 *      - name: id
 *        in: path
 *        type: integer
 *        description: The ID of the list_item.
 *     responses:
 *       200:
 *         description: returns the list_item object.
 */
list_items.route('/:id').patch(ListItemsController.updateListItem);

/**
 * @swagger
 * /list_items/{id}:
 *   put:
 *     summary: Update a list_item
 *     tags: [ListItems]
 *     parameters:
 *      - name: id
 *        in: path
 *        type: integer
 *        description: The ID of the list_item.
 *     responses:
 *       200:
 *         description: returns the list_item object.
 */
list_items.route('/:id').put(ListItemsController.updateListItem);

/**
 * @swagger
 * /list_items/{id}:
 *   delete:
 *     summary: Delete a list_item
 *     tags: [ListItems]
 *     parameters:
 *      - name: id
 *        in: path
 *        type: integer
 *        description: The ID of the list_item.
 *     responses:
 *       204:
 *         description: no content.
 */
list_items.route('/:id').delete(ListItemsController.deleteListItem);

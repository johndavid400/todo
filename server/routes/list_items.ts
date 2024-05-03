import { Router, Request, Response } from 'express';
import * as ListItemsController from '../controllers/list_items_controller';
import { param, query, body } from 'express-validator';
import { validateRequest } from '../utils/validator';

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
 *     parameters:
 *      - name: list_id
 *        in: query
 *        type: integer
 *        description: The list_id of the list_items.
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
 *      - name: list_id
 *        in: path
 *        type: string
 *        description: The id of the list.
 *     requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              title:
 *                type: string
 *                required: true
 *              position:
 *                type: integer
 *     responses:
 *       200:
 *         description: Returns the new list_item.
 */
list_items.route('/').post(
  [
    body('title')
      .isString()
      .isLength({min: 3})
      .trim()
      .optional({nullable: true}),
    body('position')
      .isInt()
  ],
  validateRequest,
  ListItemsController.createListItem
);

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
 *     requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              title:
 *                type: string
 *              position:
 *                type: integer
 *              completed:
 *                type: boolean
 *     responses:
 *       200:
 *         description: returns the list_item object.
 */
list_items.route('/:id').patch(
  [
    body('title')
      .isString()
      .isLength({min: 3})
      .trim()
      .optional({nullable: true}),
    body('position')
      .isInt()
      .optional({nullable: true}),
    body('completed')
      .isBoolean()
      .trim()
      .optional({nullable: true})
  ],
  validateRequest,
  ListItemsController.updateListItem
);

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
list_items.route('/:id').put(
  [
    body('title')
      .isString()
      .isLength({min: 3})
      .trim()
      .optional({nullable: true}),
    body('position')
      .isInt()
      .optional({nullable: true}),
    body('completed_at')
      .isString()
      .trim()
      .optional({nullable: true})
  ],
  validateRequest,
  ListItemsController.updateListItem
);

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

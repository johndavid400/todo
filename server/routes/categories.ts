import { Router, Request, Response } from 'express';
import * as categoriesController from '../controllers/categories_controller';
import { param, query, body } from 'express-validator';
import { validateRequest } from '../utils/validator';

/**
 * @swagger
 * tags:
 *   name: Categories
 */
export const categories = Router();

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Get all categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: Returns an array of categories.
 */
categories.route('/').get(categoriesController.getCategories);

/**
 * @swagger
 * /categories/{id}:
 *   get:
 *     summary: Get a category by ID
 *     tags: [Categories]
 *     parameters:
 *      - name: id
 *        in: path
 *        type: integer
 *        description: The ID of the category.
 *     responses:
 *       200:
 *         description: Returns an array of categories.
 */
categories.route('/:id').get(categoriesController.getCategory);

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Create a new category
 *     tags: [Categories]
 *     requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                required: true
 *              color_code:
 *                type: string
 *     responses:
 *       200:
 *         description: Returns the new category.
 */
categories.route('/').post(
  [
    body('name')
      .isString()
      .isLength({min: 3})
      .trim(),
    body('color_code')
      .isString()
      .isLength({min: 4})
      .trim()
  ],
  validateRequest,
  categoriesController.createCategory
);

/**
 * @swagger
 * /categories/{id}:
 *   patch:
 *     summary: Update a category
 *     tags: [Categories]
 *     parameters:
 *      - name: id
 *        in: path
 *        type: integer
 *        description: The ID of the category.
 *     responses:
 *       200:
 *         description: returns the category object.
 */
categories.route('/:id').patch(categoriesController.updateCategory);

/**
 * @swagger
 * /categories/{id}:
 *   put:
 *     summary: Update a category
 *     tags: [Categories]
 *     parameters:
 *      - name: id
 *        in: path
 *        type: integer
 *        description: The ID of the category.
 *     responses:
 *       200:
 *         description: returns the category object.
 */
categories.route('/:id').put(categoriesController.updateCategory);

/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     summary: Delete a category
 *     tags: [Categories]
 *     parameters:
 *      - name: id
 *        in: path
 *        type: integer
 *        description: The ID of the category.
 *     responses:
 *       204:
 *         description: no content.
 */
categories.route('/:id').delete(categoriesController.deleteCategory);

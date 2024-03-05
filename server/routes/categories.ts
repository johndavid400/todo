import { Router, Request, Response } from 'express';
import * as categoriesController from '../controllers/categories_controller';

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
 *     parameters:
 *      - name: name
 *        in: path
 *        type: string
 *        description: The name of the category.
 *      - name: color_code
 *        in: path
 *        type: string
 *        description: The HTML color hex value of the category.
 *     responses:
 *       200:
 *         description: Returns the new category.
 */
categories.route('/').post(categoriesController.createCategory);

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

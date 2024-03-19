import { describe, expect, it } from "@jest/globals";
import { when } from "jest-when";
import { mockRequest, mockResponse } from '../../testUtils/mock_request';
import * as categoriesController from '../categories_controller';
import * as categoryService from "../../services/category_service";

jest.mock("../../services/category_service");

describe('Categories controller', () => {
  describe('getCategories', () => {
    it('returns categories', async () => {
      const userId = 1;
      const req = mockRequest({ locals: { userId: userId } });
      const res = mockResponse(userId);
      const mockReturnValue = [] as any;

      when(categoryService.getCategories)
          .calledWith()
          .mockReturnValueOnce(mockReturnValue);

      await categoriesController.getCategories(req, res);

      expect(categoryService.getCategories).toHaveBeenCalledTimes(1);
    });
  });
  describe('getCategory', () => {
    it('returns a category', async () => {
      const userId = 1;
      const req = mockRequest({ params: {id: 1}, locals: { userId: userId } });
      const res = mockResponse(userId);
      const mockReturnValue = [] as any;

      when(categoryService.getCategory)
          .calledWith(1)
          .mockReturnValueOnce(mockReturnValue);

      await categoriesController.getCategory(req, res);

      expect(categoryService.getCategory).toHaveBeenCalledTimes(1);
    });
  });
});


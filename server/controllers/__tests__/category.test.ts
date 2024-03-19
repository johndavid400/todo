import { when } from "jest-when";
import * as categoriesController from '../categories_controller';
import { mockRequest, mockResponse } from '../../testUtils/mock_request';
import { prisma } from "../../utils/prisma";
import { prismaMock } from "./../../testUtils/prisma";

jest.mock('@prisma/client');

describe("categories controller", () => {
  it("Should return 200 when categories available", async () => {
    const userId = 1;
    const req = mockRequest({ locals: { userId: userId } });
    const res = mockResponse(userId);

    const categories = [{ id: 1 }];
    prismaMock.categories = { findMany: jest.fn().mockReturnValueOnce(categories) };

    const result = await categoriesController.getCategories(req, res);
    expect(prisma.categories.findMany).toHaveBeenCalledTimes(1);
  });
});

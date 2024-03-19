import { when } from "jest-when";
import * as categoriesController from '../categories_controller';
import { mockRequest, mockResponse } from '../../testUtils/mock_request';
import { prisma } from "../../utils/prisma";
//import { prismaMock } from "./../../testUtils/prisma";

jest.mock("@prisma/client");
jest.mock("../../utils/prisma");

describe("categories controller", () => {
  it.skip("Should return 200 when categories available", async () => {
    /*
    const userId = 1;
    const req = mockRequest({ locals: { userId: userId } });
    const res = mockResponse(userId);
    const mockReturnValue = [] as any;

    prisma.categories = { findMany: jest.fn().mockReturnValueOnce(mockReturnValue) };

    await categoriesController.getCategories(req, res);

    expect(res.sendStatus).toHaveBeenCalledTimes(1);
    */
  });
});

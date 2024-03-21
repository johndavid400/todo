import * as categoryService from '../category_service';
import { prisma } from '../../utils/prisma';
import { prismaMock } from '../../testUtils/prisma';

jest.mock('@prisma/client');

describe('getCategories', () => {
  it('should return all categories', async () => {
    const categories = [{ id: 1 }];
    prismaMock.categories = { findMany: jest.fn().mockReturnValueOnce(categories) };

    const result = await categoryService.getCategories();
    expect(prisma.categories.findMany).toHaveBeenCalledTimes(1);
    expect(result).toEqual(categories);
  });
});

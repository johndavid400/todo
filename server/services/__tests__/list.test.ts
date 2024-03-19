import * as listService from '../list_service';
import { prisma } from '../../utils/prisma';
import { prismaMock } from '../../testUtils/prisma';

jest.mock('@prisma/client');

describe('getLists', () => {
  it('should return all lists', async () => {
    const lists = [{ id: 1 }];
    prismaMock.lists = { findMany: jest.fn().mockReturnValueOnce(lists) };

    const result = await listService.getLists();
    expect(prisma.lists.findMany).toHaveBeenCalledTimes(1);
    expect(result).toEqual(lists);
  });
});

import * as listItemService from '../list_item_service';
import { prisma } from '../../utils/prisma';
import { prismaMock } from '../../testUtils/prisma';

jest.mock('@prisma/client');

describe('getListItems', () => {
  it('should return all list_items', async () => {
    const list_items = [{ id: 1 }];
    prismaMock.list_items = { findMany: jest.fn().mockReturnValueOnce(list_items) };

    const result = await listItemService.getListItems();
    expect(prisma.list_items.findMany).toHaveBeenCalledTimes(1);
    expect(result).toEqual(list_items);
  });
});

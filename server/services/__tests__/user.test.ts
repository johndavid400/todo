import * as userService from '../user_service';
import { prisma } from '../../utils/prisma';
import { prismaMock } from '../../testUtils/prisma';

jest.mock('@prisma/client');

describe('getAllForUser', () => {
  it('should return all events for a user', async () => {
    const users = [{ id: 1 }];
    prismaMock.users = { findMany: jest.fn().mockReturnValueOnce(users) };

    const result = await userService.getUsers();
    expect(prisma.users.findMany).toHaveBeenCalledTimes(1);
    expect(result).toEqual(users);
  });
});

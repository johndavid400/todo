import * as userService from '../user_service';
import { prisma } from '../../utils/prisma';
import { prismaMock } from '../../testUtils/prisma';

jest.mock('@prisma/client');

describe('UserService', () => {
  describe('getUsers', () => {
    it('should return all users', async () => {
      const users = [{ id: 1 }];
      prismaMock.users = { findMany: jest.fn().mockReturnValueOnce(users) };

      const result = await userService.getUsers();
      expect(prisma.users.findMany).toHaveBeenCalledTimes(1);
      expect(result).toEqual(users);
    });
  });
  describe('getUser()', () => {
    it('should return a user', async () => {
      const user = { id: 1 };
      prismaMock.users = { findFirst: jest.fn().mockReturnValueOnce(user) };

      const result = await userService.getUser(1);
      expect(prisma.users.findFirst).toHaveBeenCalledTimes(1);
      expect(result).toEqual(user);
    });
  });
  describe('createUser()', () => {
    it('should create a user', async () => {
      const user = {};
      const email = 'test@example.com';
      const password = 'password';
      prismaMock.users = { create: jest.fn().mockReturnValueOnce(user) };
      const result = await userService.createUser(email, password);
      expect(prisma.users.create).toHaveBeenCalledTimes(1);
      expect(result).toEqual(user);
    });
  });
  describe('updateUser()', () => {
    it('should update a user', async () => {
      const user = {};
      const password = 'passwords';
      prismaMock.users = { update: jest.fn().mockReturnValueOnce(user) };
      const result = await userService.updateUser(1, password);
      expect(prisma.users.update).toHaveBeenCalledTimes(1);
      expect(result).toEqual(user);
    });
  });
  describe('deleteUser()', () => {
    it('should delete a user', async () => {
      const user = {};
      prismaMock.users = { delete: jest.fn().mockReturnValueOnce(user) };
      const result = await userService.deleteUser(1);
      expect(prisma.users.delete).toHaveBeenCalledTimes(1);
      expect(result).toEqual(user);
    });
  });
});

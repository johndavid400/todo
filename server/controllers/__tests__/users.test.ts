import { describe, expect, it } from "@jest/globals";
import { when } from "jest-when";
import { mockRequest, mockResponse } from "../../testUtils/mock_request";
import * as usersController from "../users_controller";
import * as userService from "../../services/user_service";

jest.mock("../../services/user_service");

describe('UsersController', () => {
  describe('GET /users', () => {
    it('finds users', async () => {
      const userId = 1;
      const req = mockRequest({ locals: { userId: userId } });
      const res = mockResponse(userId);
      const mockReturnValue = [] as any;

      when(userService.getUsers)
          .calledWith()
          .mockReturnValueOnce(mockReturnValue);

      await usersController.getUsers(req, res);

      expect(userService.getUsers).toHaveBeenCalledTimes(1);
    });
  });
  describe('GET /users/:id', () => {
    it('finds user', async () => {
      const userId = 1;
      const req = mockRequest({ params: {id: 1}, locals: { userId: userId } });
      const res = mockResponse(userId);
      const mockReturnValue = [] as any;

      when(userService.getUser)
          .calledWith(1)
          .mockReturnValueOnce(mockReturnValue);

      await usersController.getUser(req, res);

      expect(userService.getUser).toHaveBeenCalledTimes(1);
    });
  });
  describe('POST /users', () => {
    it('creates user', async () => {
      const email = 'test@test.com';
      const password = 'password';
      const userId = 1;
      const req = mockRequest({ body: {email: email, password: password}, locals: { userId: userId } });
      const res = mockResponse(userId);
      const mockReturnValue = [] as any;

      when(userService.createUser)
          .calledWith(email, password)
          .mockReturnValueOnce(mockReturnValue);

      await usersController.createUser(req, res);

      expect(userService.createUser).toHaveBeenCalledTimes(1);
    });
  });
  describe('PUT /users/1', () => {
    it('updates user', async () => {
      const password = 'password';
      const userId = 1;
      const req = mockRequest({ body: {password: password}, params: { id: userId } });
      const res = mockResponse(userId);
      const mockReturnValue = [] as any;

      when(userService.updateUser)
          .calledWith(userId, password)
          .mockReturnValueOnce(mockReturnValue);

      await usersController.updateUser(req, res);

      expect(userService.updateUser).toHaveBeenCalledTimes(1);
    });
  });
  describe('DELETE /users/1', () => {
    it('deletes user', async () => {
      const userId = 1;
      const req = mockRequest({ params: { id: userId } });
      const res = mockResponse(userId);
      const mockReturnValue = [] as any;

      when(userService.deleteUser)
          .calledWith(userId)
          .mockReturnValueOnce(mockReturnValue);

      await usersController.deleteUser(req, res);

      expect(userService.deleteUser).toHaveBeenCalledTimes(1);
    });
  });
});


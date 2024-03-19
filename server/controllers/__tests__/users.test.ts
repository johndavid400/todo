import { describe, expect, it } from "@jest/globals";
import { when } from "jest-when";
import { mockRequest, mockResponse } from "../../testUtils/mock_request";
import * as usersController from "../users_controller";
import * as userService from "../../services/user_service";

jest.mock("../../services/user_service");

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


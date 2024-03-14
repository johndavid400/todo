import { when } from "jest-when";
import { mockRequest, mockResponse } from "../../utils/__tests__/mock_request";
import * as usersController from "../users_controller";

describe("UsersController", () => {
  describe("getUsers", () => {
    it('should sanity check', () => {
      expect(2+2).toBe(4);
    });
  });
});


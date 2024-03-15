import { describe, expect, it } from "@jest/globals";
import { when } from "jest-when";
import { mockRequest, mockResponse } from "../../testUtils/mock_request";
import * as usersController from "../users_controller";
import * as userService from "../../services/user_service";

//jest.mock("../../services/user_service");

describe('something', () => {
  it('should sanity check', () => {
    expect(2+2).toBe(4);
  });
});


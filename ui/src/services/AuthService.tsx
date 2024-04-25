import instance from '../utils/axios';
import TokenUtils from "../utils/token";

const authenticate = async (email: string, password: string) => {
  return await instance
    .post("/auth/login", { email, password })
    .then((response) => {
      if (response.status == 200) {
        TokenUtils.setJWT(response.data);
      }
      else {
        TokenUtils.removeUser();
      }
      return response;
    });
};

const AuthService = {
  authenticate: authenticate,
}

export default AuthService;

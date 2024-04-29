import TokenUtils from "../utils/token";
import instance from "../utils/axios";

const authenticate = async (email: string, password: string) => {
  return await instance
    .post("/auth/login", { email, password })
    .then((response) => {
      if (response.status == 200) {
        TokenUtils.setJWT(response.data);
      }
      return response;
    });
};

const logout = async () => {
  return await TokenUtils.logout();
};

const AuthService = {
  authenticate: authenticate,
  logout: logout
}

export default AuthService;

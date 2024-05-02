import { jwtDecode } from "jwt-decode";

const getJWT = () => {
  return localStorage.getItem("jwt") ?? "";
};

const decodeJWT = (jwt: any) => {
  return jwtDecode(jwt);
};

const setJWT = (jwt: any) => {
  if (jwt) {
    localStorage.setItem("jwt", jwt);
    setUser(jwt);
  }
  else {
    removeUser();
  }
};

const getUser = () => {
  return localStorage.getItem("user");
};

const setUser = (jwt: any) => {
  const user = decodeJWT(jwt);
  localStorage.setItem("user", JSON.stringify(user));
};

const logout = () => {
  localStorage.removeItem("jwt");
  localStorage.removeItem("user");
};

const removeUser = () => {
  logout();
};

const isTokenValid = () => {
  const jwt = getJWT() ;
  if (jwt) {
    console.log('Token is Valid!');
    return isTokenExpired(jwt);
  }
  else {
    console.log('Token is NOT Valid!');
    return false;
  }
  console.log(jwt);
};

const isTokenExpired = (token: any) => {
  const jwt = jwtDecode(token) as any;
  const currentTime = new Date().getTime() / 1000;
  return currentTime > jwt.exp;
};

const TokenUtils = {
  getJWT,
  setJWT,
  getUser,
  setUser,
  removeUser,
  logout,
  isTokenValid,
  isTokenExpired
};

export default TokenUtils;

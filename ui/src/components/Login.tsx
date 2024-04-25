import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect, useReducer, useContext } from 'react';
import AuthService from "../services/AuthService";
import TokenUtils from "../utils/token";

function Login() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const loginUser = async (email: string, password: string) => {
    let msg = '';
    let response = {};

    try {
      response = await AuthService.authenticate(email, password);
      status = response.status;
      navigate('/');
    }
    catch (err) {
      msg = err.response.data.response;
      setError(msg);
      response = {"data": msg}
      navigate('/login');
    }

    return response.data;
  };

  const handleLogin = (event: any) => {
    event.preventDefault();
    try {
      console.log(email + " " + password);
      loginUser(email, password);
    } catch (err) {
      console.log('OH SNAP!');
      console.log(err);
    }
  };

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <div className="error-msg">{error}</div>
      <form>
        <label>
          <p>Email</p>
          <input type="text" onChange={handleEmailChange} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={handlePasswordChange} />
        </label>
        <div>
          <button type="submit" onClick={handleLogin}>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Login;

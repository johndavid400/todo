import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect, useReducer, useContext } from 'react';
import AuthService from "../services/AuthService";
import TokenUtils from "../utils/token";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const notify = (msg: any) => toast(msg);

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
      notify(msg);
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
      console.log(err);
    }
  };

  return(
    <>
      <div className="login-wrapper">
        <h1>Please Log In</h1>
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
      <ToastContainer position="bottom-right"/>
    </>
  )
}

export default Login;

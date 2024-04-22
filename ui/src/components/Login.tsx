import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect, useReducer, useContext } from 'react';
import AuthService from "../services/AuthService";
import TokenUtils from "../utils/token";

function Login() {
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
    const response = await AuthService.authenticate(email, password);

    if (response.status === 200) {
      navigate('/');
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
  )
}

export default Login;

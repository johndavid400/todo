import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect, useReducer, useContext } from 'react';
import AuthService from "../services/AuthService";
import TokenUtils from "../utils/token";
import AuthContext from '../context/AuthContext'

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import siteLogo from '@/assets/site-logo.png';

const loginSchema = z.object({
  email: z.string().min(5, { message: 'Email must be at least 5 characters.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, login, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const notify = (msg: any) => toast(msg);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const loginUser = async (email: string, password: string) => {
    let response = {};

    try {
      const response = await AuthService.authenticate(email, password);
      const userData = TokenUtils.getUser();
      login(userData);
      navigate('/');
      return response.data
    }
    catch (err) {
      await AuthService.logout();
      logout();
      const msg = err.response.data.response;
      notify(msg);
      navigate('/login');
      return msg;
    }
  };

  const handleLogin = (event: any) => {
    loginUser(email, password);
  };

  return(
    <>
      <div className="login-wrapper">
        <img src={siteLogo} className="login-logo" alt="Site logo" />
        <form className="login-form" onSubmit={handleSubmit((d) => console.log(d))}>
          <label className="form-field">
            <p className="label">Email</p>
            <Input {...register('email')} onChange={handleEmailChange} />
            {errors.email?.message && <p className="error-msg">{errors.email?.message}</p>}
          </label>
          <label className="form-field">
            <p className="label">Password</p>
            <Input type="password" {...register('password') } onChange={handlePasswordChange} />
            {errors.password?.message && <p className="error-msg">{errors.password?.message}</p>}
          </label>
          <div>
            <Button variant="outline" className="login-btn" onClick={handleLogin}>Submit</Button>
          </div>
        </form>
      </div>
      <ToastContainer position="bottom-right"/>
    </>
  )
}

export default Login;

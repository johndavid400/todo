import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect, useReducer, useContext } from 'react';
import AuthService from "../services/AuthService";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Logout() {
  const navigate = useNavigate();
  const notify = (msg: any) => toast(msg);

  useEffect(() => {
    AuthService.logout();
  }, []);
  

  const logoutUser = async (email: string, password: string) => {
    const response = await 
    navigate('/');
    return response.data
  };


  const handleLogout = (event: any) => {
    //loginUser(email, password);
  };

  return(
    <>
      <ToastContainer position="bottom-right"/>
    </>
  )
}

export default Logout;

import { useState, useEffect, useReducer } from 'react';
import './App.css';
import Nav from './components/Nav';
import Router from './components/Router';
import { Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';

import AuthContext from './context/AuthContext'
import TokenUtils from "./utils/token";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const userData = TokenUtils.getUser();
    login(userData);
  }, []);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    TokenUtils.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <Nav />
      <Router />
    </AuthContext.Provider>
  )
}

export default App

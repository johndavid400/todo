import { useState, useEffect, useReducer } from 'react';
import { Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';
import AuthContext from './context/AuthContext'
import TokenUtils from "./utils/token";
import Nav from './components/Nav';
import Router from './components/Router';
import '@radix-ui/themes/styles.css';
import './output.css';
import { Theme } from '@radix-ui/themes';


function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const userData = TokenUtils.getUser();
    if (userData) {
      login(userData);
    }
    else {
      setUser(null);
    }
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
      <Theme>
        <Nav />
        <Router />
      </Theme>
    </AuthContext.Provider>
  )
}

export default App

import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect, useReducer, useContext } from 'react';
import TokenUtils from "../utils/token";
import Logos from '../components/Logos';
import AuthContext from '../context/AuthContext'

const Nav = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const unAuthenticatedNavbar = () => {
    return (
      <nav className='main-nav' style={{ position: 'absolute', top: 0 }}>
      </nav>
    )
  }

  const authenticatedNavbar = () => {
    return (
      <nav className='main-nav' style={{ position: 'absolute', top: 0 }}>
        <button onClick={() => logout()}>Logout</button>
        <button onClick={() => navigate("/test")}>Test</button>
        <button onClick={() => navigate("/nottest")}>Not Test</button>
        <button onClick={() => navigate("/lists")}>Lists</button>
        <button onClick={() => navigate("/users")}>Users</button>
      </nav>
    )
  }

  return (
    <>
      {user ? authenticatedNavbar() : unAuthenticatedNavbar()}
      <Logos />
    </>
  )
};

export default Nav;

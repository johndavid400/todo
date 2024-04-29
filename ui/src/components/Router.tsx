import { useState, useEffect, useReducer, useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Test from '../containers/Test';
import Lists from '../containers/Lists';
import List from '../containers/List';
import Users from '../containers/Users';
import User from '../containers/User';

import Login from '../components/Login';
import Logout from '../components/Logout';
import TokenUtils from "../utils/token";
import CountContext from '../context/CountContext'
import AuthContext from '../context/AuthContext'

const Router = () => {
  const [count, setCount] = useState(0);
  const { user, logout } = useContext(AuthContext);

  const authenticatedRoutes = () => {
    return (
      <CountContext.Provider value={{count, setCount}}>
        <div className="container">
          <Routes>
            <Route path="/logout" element={<Logout />} />
            <Route path="/lists">
               <Route index element={<Lists />} />
               <Route path={':listId'} element={<List />} />
            </Route>
            <Route path="/users">
               <Route index element={<Users />} />
               <Route path={':userId'} element={<User />} />
            </Route>
            <Route path="/test" element={<Test />} />
            <Route path="/nottest" element={<>Goodbye there</>} />
            <Route path="*" element={<Navigate to="/test" />} />
          </Routes>
        </div>
      </CountContext.Provider>
    )
  }

  const unAuthenticatedRoutes = () => {
    return (
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    )
  }

  return (
    <>
      {user ? authenticatedRoutes() : unAuthenticatedRoutes()}
    </>
  )
}

export default Router;

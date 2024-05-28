import { useState, useEffect, useReducer, useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from '../containers/Login';
import Test from '../containers/Test';
import Lists from '../containers/lists/Lists';
import List from '../containers/lists/List';
import Users from '../containers/users/Users';
import User from '../containers/users/User';

import Category from '../containers/categories/Category';
import Categories from '../containers/categories/Categories';

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
            <Route path="/logout" element={<>Logout</>} />
            <Route path="/categories">
               <Route index element={<Categories />} />
               <Route path={':categoryId'} element={<Category />} />
            </Route>
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
            <Route path="*" element={<Navigate to="/lists" />} />
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

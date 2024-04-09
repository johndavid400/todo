import { useState, useEffect, useReducer } from 'react';
import './App.css';
import Nav from './components/Nav';
import Router from './components/Router';
import { Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';
import AppContext from './components/AppContext'

function App() {
  const [count, setCount] = useState(0);

  const updateCount = (value: Number) => {
    setCount(value);
  }

  return (
    <AppContext.Provider value={{count, updateCount}}>
      <Nav />
      <Router />
    </AppContext.Provider>
  )
}

export default App

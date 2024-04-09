import { useState, useEffect, useReducer } from 'react';
import './App.css';
import Nav from './components/Nav';
import Router from './components/Router';
import { Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';
import CountContext from './components/CountContext'

function App() {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{count, setCount}}>
      <Nav />
      <Router />
    </CountContext.Provider>
  )
}

export default App

import { useState, useEffect, useReducer } from 'react';
import './App.css';
import Nav from './components/Nav';
import Router from './components/Router';
import { Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <Router />
    </>
  )
}

export default App

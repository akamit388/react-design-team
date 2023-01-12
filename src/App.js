import React, {useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Home from './pages/Home';
//import Register from './components/Register';
import Login from './pages/Login';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile/>} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

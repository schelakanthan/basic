import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route instead of Switch

import { GlobalState } from '../../GlobalState';
import Login from '../pages/Login/login'; // Ensure correct capitalization of component names
import Home from '../pages/main/home'; 
import About from '../pages/main/about'; 
import Services from '../pages/main/service';// Ensure correct capitalization of component names
import Signup from '../pages/Register/signup'; // Ensure correct capitalization of component names
import Contact from './main/contact';

function Pages() {
  const state = useContext(GlobalState);
  // const [isLogged] = state.userAPI.isLogged
  // const [isAdmin] = state.userAPI.isAdmin
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default Pages;

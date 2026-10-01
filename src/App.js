import logo from './logo.svg';
import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Skills from './Skills';
import Navbar from './Navbarnav';
function App() {
  return (
    <>

      <BrowserRouter>
        <div className='appmaincontainer'>
          <Navbar />
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Skills" element={<Skills />} />


             
           
          </Routes>
        </div>
      </BrowserRouter>

    </>
  );
}

export default App;

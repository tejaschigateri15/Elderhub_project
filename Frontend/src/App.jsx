// import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Test from './pages/Test';
import Navbar from './pages/Navbar';
import HomePage from './pages/HomePage';
import Userdetails from './pages/Userdetails';
import Donate from './pages/Donate';
import Signup from './pages/Signup';
import Success from './pages/Success';
import Unsuccess from './pages/Uncess';
import Notfound from './pages/Notfound';
import Aboutus from './pages/Aboutus';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/JoinAshram" element={<Userdetails/>} />
        <Route path="/donate" element={<Donate/>} />
        <Route path="/unsucess" element={<Unsuccess/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/sucess" element={<Success/>} />
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="*" element={<Notfound/>} />
      </Routes>
    </Router>
  )
}

// <Route path="/login" element={<Test/>} />
// <Route path="/contact" element={<Navbar/>} />

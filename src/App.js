import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'

import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile'
import Footer from './components/Footer';
import Login from './Pages/Auth/Login';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      <Carousel />
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/Profile'>Profile</Link>
      </nav>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/auth/Login' element={<Login />} />
      </Routes>
      <footer/>

    </div>
    
  );
}



export default App;

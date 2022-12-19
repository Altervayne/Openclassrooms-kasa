import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

const ReactRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home activeLink='home' />} />
      <Route path='/about' element={<About activeLink='about' />}/>
    </Routes>
  );
}

export default ReactRoutes;
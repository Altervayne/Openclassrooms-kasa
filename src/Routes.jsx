import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Housing from './pages/Housing.jsx'
import PageNotFound from './pages/PageNotFound.jsx'

const ReactRoutes = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home activeLink='home' />} />
      <Route path='/about' element={<About activeLink='about' />} />
      <Route path='/housing/:id' element={<Housing activeLink='housing' />} />
      <Route path='*' element={<PageNotFound activeLink='404' />} />
    </Routes>
  );
}

export default ReactRoutes;
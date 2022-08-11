import React from 'react';
import Dashboard from './Dashboard';
import { Route, Routes, useLocation } from 'react-router-dom';


function Pages() {
    const location = useLocation();
  return (
    <Routes Location={location} key={location.pathname}>
        <Route path='/dashboard/' element={<Dashboard />} />
    </Routes>
  )
}

export default Pages;
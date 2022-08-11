import React from 'react';
import Dashboard from './Dashboard';
import Stocks from './StockList/Stocks';
import { Route, Routes, useLocation } from 'react-router-dom';


function Pages() {
    const location = useLocation();
  return (
    <Routes Location={location} key={location.pathname}>
        <Route path='/dashboard/:symbol/' element={<Dashboard />} />
        <Route path='/stocks/' element={<Stocks />} />
    </Routes>
  )
}

export default Pages;
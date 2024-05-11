import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/home/home';
import CadDespesa from './pages/cad-despesa/cad-despesa';
import './styles/global.css'
import utils from './utils/utils.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path={utils.despesa} element={<CadDespesa/>} />
  </Routes>
  </BrowserRouter>
   
);


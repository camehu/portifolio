/* eslint-disable react/jsx-no-undef */
import React from 'react'
import {BrowserRouter, Router, Route} from 'react-router-dom';
import PagProjetos from '../pages/PagProjetos'
import Backend from '../pages/Backend';
import Frontend from '../pages/Frontend';

function NavIndexContext() {
  return (
    
        <BrowserRouter>
        <Router>
            <Route path="/" element={<PagProjetos />}  />
            <Route path="/frontend" element={<Frontend />}  />
            <Route path="/backend" element={<Backend />}  />

        </Router>          
                
        </BrowserRouter>    
   
  )
}

export default NavIndexContext
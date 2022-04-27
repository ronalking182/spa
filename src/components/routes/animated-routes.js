import React from "react";
import Home from '../../pages/home'
import Contact from '../../pages/contact'
import Services from '../../pages/services'
import Gallery from '../../pages/gallery'
import Product from '../../pages/product'


import { Routes, Route, useLocation } from "react-router-dom"
import {AnimatePresence} from 'framer-motion'

const AnimatedRoutes = () => {
    const location = useLocation()
  return<AnimatePresence>
   <Routes location={location} key={location.pathname}>
  <Route path='/' element={ <Home/> }/>
  <Route path='contact' element={ <Contact/> }/>
  <Route path='services' element={ <Services/> }/>
  <Route path='gallery' element={ <Gallery/> }/>
  <Route path='product' element={ <Product/> }/>
   </Routes>
  </AnimatePresence>;
};

export default AnimatedRoutes;

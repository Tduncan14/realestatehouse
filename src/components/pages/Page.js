import React from 'react';
import Header from '../headers/Header';
import Home from '../Home/Home';
import About from '../About/About'
import Services from '../Services/Services';
import Blog from '../Blog/Blog';
import Pricing from '../Pricing/Pricing';
import Contact from '../Contact/Contact';
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import Footer from '../footer/Footer';



const Pages = () => {

    


    return <>
    <Router>
    <Header />
  <Routes>
          <Route exact path='/' element={<Home />} />
          <Route  path='/about' element={<About />} />
          <Route  path='/services' element={<Services />} />
          <Route  path='/blog' element={<Blog />} />
          <Route  path='/pricing' element={<Pricing />} />

    </Routes>
    <Footer />
  

    </Router>

    </>



}


export default Pages
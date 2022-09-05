import React from 'react';
import Header from '../headers/Header';
import Home from '../Home/Home';
import About from '../About/About'
import Services from '../Services/Services';
import Blog from '../Blog/Blog';
import Pricing from '../Pricing/Pricing';
import Contact from '../Contact/Contact';
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';



const Pages = () => {

    


    return <>
    <Router>
    <Header />
  <Routes>
          <Route exact path='/' component={Home} />
          <Route  path='/about' component={About} />
          <Route  path='/services' component={Services} />
          <Route  path='/blog' component={Blog} />
          <Route  path='/pricing' component={Pricing} />

    </Routes>
  

    </Router>

    </>



}


export default Pages
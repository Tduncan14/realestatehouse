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
    <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/contact' component={Contact} />
        </Switch>

    </Router>

    </>



}


export default Pages
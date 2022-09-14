import React from 'react'
import Heading from '../heading/heading';
import './Price.css';
import PriceCard from './PriceCard';

const Pricing = () => {
  return (
   <section className="price padding">
    
      <div className="container">
         <Heading title="Select Your Package" subtitle=" This are all the packages we offer" />
         <PriceCard />
      </div>
   </section>
  )
}

export default Pricing

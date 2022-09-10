import React from 'react';
import Heading from '../../heading/heading';
import './featured.css';
import FeaturedCard from './featuredCard';



const Featured = () => {



    return(
        <> 
        <section className="featured background">
            <div className="container">
                <Heading title="Featured Property Types" subtitle=" Find  All Type of Property"/>
                <FeaturedCard />
            </div>
            
            
            </section></>
    )
}


export default Featured
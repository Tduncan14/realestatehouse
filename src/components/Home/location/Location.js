import React from 'react';
import Heading from '../../heading/heading';
import { location } from '../../data/Data';
import './Location.css'


const Location = () => {





    return(
        <section className="location padding">

            <div className="container">
                 <Heading title="Explore By Location"  subtitle=" All the locations you can look at"/>
            </div>


           <div className="content grid3 mtop">
              {location.map((items,index) => {
                return(
                <div className="box">
                      <img src={items.cover} alt=''/>
                </div>
              )})}
           </div>
        </section>
    )
}



export default Location
import React from 'react'
import { team } from '../../data/Data'
import Heading from '../../heading/heading'
import './Team.css'

const Team = () => {
  return (
   <>
   <section className="team background">
      <div className="container">
          <Heading title=" Our Featured Agents"  subtitle="Get in touch with them" />





       <div className="content mtop grid3">
         {team.map((val,index) => {

          
         return(
            <div className="box" key={index}>
                <button className="btn3">{val.list} Listings </button>

                <div className="details img">
                       <img  className=""src={val.cover} alt='' />
                       <i className=" fa fa-circle-check"></i>
                </div>
                <i className="fa fa-location-dot"></i>
                <label htmlFor=''>{val.address}</label>
                <h4>{val.name}</h4>


                <ul>
                    {val.icon.map((icon,index) => (

                        <li key={index}>{icon}</li>
         ))}
                </ul>

                <div className="button flex">
                    <button>
                    < i className="fa fa-envelope"></i>
                    </button>

                    <button className="btn4">
                    < i className="fa fa-phone-alt"></i>
                    </button>


                </div>

            </div>
         )

         })}
       </div>
      </div>
   </section>
   </>
  )
}

export default Team

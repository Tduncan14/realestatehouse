import React from 'react'
import Featured from './featured/featured'
import Hero from './Hero/Hero'
import Recent from './recent/Recent'
import Awards from './awards/Awards'
import Location from './location/Location'

const Home = () => {
  return (
    <div>
     <Hero /> 
     <Featured />
     <Recent />
     <Awards />
     <Location />
      
    </div>
  )
}

export default Home

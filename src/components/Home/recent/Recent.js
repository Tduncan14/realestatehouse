import React from 'react'
import Heading from '../../heading/heading'
import RecentCard from './RecentCard'

const Recent = () => {
  return (
  <>
  <section className="recent padding">
      <div className="container">
         <Heading title='Recent Property Listed' subtitle=' a list a lot of recent and new properties' />


         <RecentCard />
      </div>
  </section>
  </>
  )
}

export default Recent

import React from 'react'
import { list } from '../../data/Data'

const RecentCard = () => {
  return (
    <div>
        <div className="content grid3 mtop">
            {list.map((val,index) =>{
                const{cover,category,location,name,price,type} = val;


                return(
                    <div className="box shadow" key="index">
                        <div className="img">
                            <img src={cover} alt="" />
                        </div>

                        <div className="text">
                            <div className="category flex">
                             <span style={{background: category === 'For Sale' ? "#25b5791a" : "#ff98001a",color:category === "For Sale" ? "#25b579" : "#ff9800"}}>
                            {category} 
                                </span>

                            </div>
                        </div>
                    </div>
                )
})}
        </div>
      
    </div>
  )
}

export default RecentCard

import React from 'react'
import { list } from '../../data/Data'

const RecentCard = () => {
  return (
    <div>
        <div className="content grid3 mtop">
            {list.map((val,index) =>{
                const{cover,catergory,location,name,price,type} = val;


                return(
                    <div className="box shadow" key="index">
                        <div className="img">
                            <img src={cover} alt="" />
                        </div>
                    </div>
                )
})}
        </div>
      
    </div>
  )
}

export default RecentCard

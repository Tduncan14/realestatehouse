import React from 'react';
import { Link } from 'react-router-dom';
import { nav } from "../data/Data"

const Header = () => {




    return(
        <>
    <header>
        <div className="container">
            <div className="logo">
                <img src='../images/logo.png' alt=''/>
            </div>
        </div>

        <div className="nav">

         <ul>
            {
             nav.map((list,index) => (
                <>
                <li key={index}>
                <Link path={list.path}>{list.text}</Link>
                </li>
                </>
             ))
            }

         </ul>

            {/* {nav.map((list,index)=>(
                <>
                 <li key={index}>
                    <Link to={list.path}>{list.text}</Link>
                 </li>
                
                </>
            ))} */}

        </div>
    </header>
        </>     
    )
}

export default Header
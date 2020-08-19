import React from 'react'
import image from './img.jpg'
import './App.css'
function Header(){
    return(
        <div className="container">
        <img 
          src={image} 
          height="100" 
          width="300"
          className="img" alt=""/>
        <h1 className="heading">Your Daily ToDO's</h1>
        </div>
    )

}
export default Header
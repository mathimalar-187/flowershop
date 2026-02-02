import React from 'react'
import './topcontent.css'
import Flower from "../assets/flw1.jpg";
import { Element } from 'react-scroll'


const topcontent = () => {
  return (
   <Element name="home" className='topcontent'>
   <h1>Ours Most Popular Flowers</h1>
   <h3>Flowers are perfect way of say to i love you..</h3>
   
    <button className='shop-btn'>Shop Now</button>
   
   </Element>
  
     
    
  )
}

export default topcontent

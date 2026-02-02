import React from 'react'
import './header.css'
import { Link } from 'react-scroll'

const header = () => {
  return (
    <div>
    <nav>
       <ul className="nav">
      <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
      <li><Link to="about" smooth={true} duration={500}>About</Link></li>
      <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      <li><Link to="footer" smooth={true} duration={500}>Footer</Link></li>
</ul>
    </nav>
   </div>

  
  )
}

export default header

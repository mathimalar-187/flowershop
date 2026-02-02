import React from 'react'
import Header from './components/header'
import Topcontent from './components/topcontent'
import './App.css'
import About from './components/about'
import Contact from './components/contact'
import Help from './components/help'

const App = () => {
  return (
    <div className='container' >
    
     <Header />
     <Topcontent />
     <About />
     <Contact />
     <Help />
     
    </div>
  )
}

export default App

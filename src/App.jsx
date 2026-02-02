import React from 'react'
import Header from './components/header'
import Topcontent from './components/topcontent'
import './App.css'
import About from './components/about'
import Contact from './components/contact'
import Footer from './components/footer'

const App = () => {
  return (
    <div className='container' >
    
     <Header />
     <Topcontent />
     <About />
     <Contact />
     <Footer />
     
    </div>
  )
}

export default App

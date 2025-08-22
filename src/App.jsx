import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Contact from './components/contact/contact'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/#about' element={<About />} />
        <Route path='/#projects' element={<Projects />} />
        <Route path='/#contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App

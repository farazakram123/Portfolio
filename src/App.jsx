import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Contact from './components/contact/contact'
import UnderDevPhase from './components/UnderDevPhase/UnderDevPhase'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/under-development' element={<UnderDevPhase />} />
      </Routes>
    </div>
  )
}

export default App

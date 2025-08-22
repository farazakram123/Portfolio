import React from 'react'
import Homepage from '../Homepage/Homepage'
import About from '../About/About'
import Projects from '../Projects/Projects'
import MySkills from '../mySkills/mySkills'
import Contact from '../contact/contact'

const Home = () => {

  return (
    <div className='home' id='home'>

      <Homepage />
      <About />
      <Projects />
      <MySkills />
      <Contact />
    </div>
  )
}

export default Home

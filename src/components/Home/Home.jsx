import React from 'react'
import Homepage from '../Homepage/Homepage'
import About from '../About/About'
import Projects from '../Projects/Projects'

const Home = () => {

  return (
    <div className='home' id='home'>

      <Homepage />
      <About />
      <Projects />
    </div>
  )
}

export default Home

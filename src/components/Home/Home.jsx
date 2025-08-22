import React from 'react'
import Homepage from '../Homepage/Homepage'
import About from '../About/About'
import Projects from '../Projects/Projects'
import MySkills from '../mySkills/mySkills'
import Contact from '../contact/contact'
import Footer from '../Footer/Footer'

const Home = () => {

  return (
    <div className='home' id='home'>

      <Homepage />
      <About />
      <Projects />
      <MySkills />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home

import './About.css'
import Bio from '../Icons/Bio/Bio'
import Education from '../Icons/Education'
import Skills from '../Skills/Skills'
import Download from '../Icons/Download'
import myPhoto from '../../assets/myPhoto.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='about' id='about'>

      <div className="about-left">

        <h1>About Me</h1>
        <div className="underline"></div>
        <div className="bio">

          <div className="bio-icon-and-text">
            <Bio />
            <p className="bio-text">Bio</p>
          </div>
          <p className="description">
            Software engineering student with a passion for creating innovative solutions. Specializing in full-stack development, I combine technical expertise with creative problem-solving to build user-centric applications.
          </p>
        </div>

        <div className="box-container">
          <div className="box-left boxes">
            <div className="education">
              <Education />
              <p className="course">M.Tech in Computer Science and Engineering(IS)</p>
            </div>
            <p className="college">Motilal Nehru National Institute of Technology Allahabad, Prayagraj, UP</p>
            <p className="year">2025 - Present</p>
            <p className="cgpa">CGPA : <span>-</span>
            </p>
          </div>

          <div className="box-right boxes">
            <div className="education">
              <Education />
              <p className="course">B.Tech in Computer Science and Engineering</p>
            </div>
            <p className="college">Pranveer Singh Institute of Technology, Kanpur, UP</p>
            <p className="year">2020 - 2024</p>
            <p className="cgpa">CGPA : <span> 8.76</span></p>
          </div>
        </div>

      </div>

      <div className="about-right">
        <div className="my-image">
          <img src={myPhoto} alt="my-image" />
        </div>
        <h2 className="name">Mohd Faraz Akram</h2>
        <p className="sde">Software Development Engineer Student</p>

        <div className="skills">
          <Skills skillName={'React'} />
          <Skills skillName={'Node js'} />
          <Skills skillName={'Full Stack'} />
          <Skills skillName={'Python'} />
        </div>

        <Link to='/under-development'><div className="download-btn">
          <Download />
          <p>Download Resume</p>
        </div>
        </Link>

      </div>
    </div>
  )
}

export default About

import React from 'react'
import './ProjectContainer.css'
import Skills from '../Skills/Skills'
import { Link } from 'react-router-dom'

const ProjectContainer = ({name, description, skills, image}) => {

    const openGitLink = () => {
        window.open('https://github.com/farazakram123/TasteCart', "_blank");
    }

    const openLiveLink = () => {
        window.open('https://tastecart-frontend.onrender.com', "_blank");
    }

  return (
    <div className='project-container'>
        <div className="project-img">
            <img src={image} alt="project-image" />
        </div>

        <div className="project-content">
            <h1 className="name">{name}</h1>
            <p className="description">{description}</p>
            <div className="skills-used">
                {
                    skills.map((skillName, index) => (<Skills key={index} skillName={skillName} />))
                }
            </div>
            <div className="project-btns">
                <button onClick={openGitLink} className='github'>Github</button>
                <button onClick={openLiveLink} className='github'>Live Link</button>
            </div>
        </div>
    </div>
  )
}

export default ProjectContainer

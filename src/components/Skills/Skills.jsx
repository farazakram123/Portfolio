import React from 'react'
import './Skills.css'
const Skills = ({skillName}) => {
  return (
    <div className='skill-component'>
      <p>{skillName}</p>
    </div>
  )
}

export default Skills

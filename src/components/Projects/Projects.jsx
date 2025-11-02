import './Projects.css'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import { projects } from '../../assets/assets'

const Projects = () => {
  return (
    <div className='projects' id='projects'>
      <h1 className='projects-title'>Projects</h1>
      <div className="underline"></div>
      <p className="desctiption">
        Here are some of the projects I've worked on, showcasing my skills in various technologies and problem domains.
      </p>

      <div className='project-list'>
        {
          projects.map((project, index) => {
            return <div key={index}>
              <ProjectContainer name={project.name} description={project.description} skills={project.skills} image={project.image} url={project.url} github={project.github} />
            </div>
          })
        }
      </div>
      
    </div>
  )
}

export default Projects

import React from 'react'
import './Homepage.css'
import Github from '../Icons/Github/Github'
import Linkedin from '../Icons/Linkedin/Linkedin'
import Gmail from '../Icons/Gmail/Gmail'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <div className="container">

            <div className="container-left">

                <p className='hello'>Hello I'm</p>
                <h1 className='name'>Mohd <span>Faraz</span> Akram</h1>
                <p className='title'>Full-Stack Developer & Computer Science and Engineering Student</p>
                <p className="description">I am a full-stack developer with a passion for creating beautiful and functional websites. I have a strong background in Computer Science and Engineering, and I am always looking for new challenges and opportunities to grow my skills.</p>
                <div className="container-left-buttons">
                    <a href="#contact"><button className='contact-me'><span>Contact Me</span></button></a>
                    <a href="#projects"><button className='view-projects'>View Projects</button></a>
                    <Link to='https://github.com/farazakram123' > <Github /></Link>
                    <Link to='https://www.linkedin.com/in/mohd-faraz-akram-0b10a6207'> <Linkedin /></Link>
                    <a href='mailto:mfarazakram0786@gmail.com'> <Gmail /></a>
                </div>

            </div>

            <div className="container-right">

                <div className="skill-container">

                    <div className="skill-container-dots">
                        <div className="dots">
                            <div className="red-dot"></div>
                            <div className="yellow-dot"></div>
                            <div className="green-dot"></div>
                        </div>

                        <p>developer.js</p>
                    </div>
                    <div className="software-developer">
                        <p>// Software Developer</p>
                    </div>
                    <div className="paragraph">

                        <p className='first-para'>
                            const<span className='dev'> developer</span><span className="equals"> = </span><span className="curly-bracket">&#x7B;</span>
                        </p>

                        <p className="para-with-padding left-side">
                            name <span className="colon"> : </span><span className="right-side">'Mohd Faraz Akram'</span><span className="comma">, </span>
                        </p>

                        <p className="para-with-padding left-side">
                            skills <span className="colon">: </span> <span className="sq-bracket">&#x5B;</span>
                            <span className="right-side">'React'<span className='comma'>, </span>'Node.js<span className="comma">, </span>'C++'<span className="sq-bracket">&#93;</span>
                            </span>
                        </p>

                        <p className="para-with-padding left-side">
                            focuses<span className="colon">: </span><span className="right-side">
                                <span className="sq-bracket">&#x5B;</span>'Full-Stack'<span className="comma">, </span>'AI'<span className="sq-bracket">&#93;</span>
                            </span>
                        </p>

                        <p className="para-with-padding left-side">
                            learning<span className="colon">: </span><span className="right-side">
                                <span className="sq-bracket">&#x5B;</span>'always'<span className="sq-bracket">&#93;</span>
                            </span>
                        </p>

                        <p className="last-para">
                            <span className="curly-bracket">&#125;</span><span className="colon">;</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage

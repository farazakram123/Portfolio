import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <div className='navbar'>
            <h2 onClick={() => navigate('/')}>MFA.</h2>

            <div className="nav-content">
                <div className="nav-links">
                    <Link to='/'>Home</Link>
                    <a href="#about">About</a>
                    <a href='#projects'>Projects</a>
                    <a href='#my-skills'>Skills</a>
                    <a href='#achievements'>Achievements</a>
                    <a href='#contact'>Contact</a>
                </div>

                <div className="day-night-mode">
                    <img src={assets.nightMode} />
                </div>
                
                <div className="nav-menu">
                    <img src={assets.main_menu} />
                    <button>Resume</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar

import React from 'react'
import './Navbar.css'
import assets from '../assets/assets'

const Navbar = () => {
    return (
        <div className='navbar'>
            <h2>MFA.</h2>
            <div className="nav-content">
                <div className="nav-links">
                    <a href='#home'>Home</a>
                    <a href='#about'>About</a>
                    <a href='#projects'>Projects</a>
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

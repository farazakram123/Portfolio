import React from 'react';
import './Footer.css';
import Github from '../Icons/Github/Github';
import Gmail from '../Icons/Gmail/Gmail';
import Linkedin from '../Icons/Linkedin/Linkedin';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <h2 className="footer-logo">MFA.</h2>
                    <p className="footer-tagline">
                        Building elegant digital solutions with a focus on user experience and technical excellence.
                    </p>
                </div>
                <div className="footer-right">
                    <div className="social-icons">
                        <a href="https://github.com/farazakram123" target="_blank" rel="noopener noreferrer">
                            <Github />
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <Linkedin />
                        </a>
                        <a href="mailto:contact@example.com">
                            <Gmail />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 Mohd Faraz Akram | Built with React</p>
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';
import './contact.css';
import Github from '../Icons/Github/Github'
import Linkedin from '../Icons/Linkedin/Linkedin'
import Gmail from '../Icons/Gmail/Gmail'
import Email from '../Icons/Email';
import Phone from '../Icons/Phone';
import Location from '../Icons/Location';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact__container">
                <div className="contact__header">
                    <h2 className="contact__title">Get In Touch</h2>
                    <div className="contact__underline"></div>
                    <p className="contact__description">
                        Have a question or want to work together? Feel free to drop me a message. I'd love to hear from you!
                    </p>
                </div>

                <div className="contact__content">
                    <div className="contact__info">
                        <h3>Contact Information</h3>
                        <p>Fill up the form and I'll get back to you as soon as possible.</p>

                        <div className="contact__details">
                            <div className="contact__detail">
                                <div className="contact__icon">
                                    <Email />
                                </div>
                                <div className="contact__text">
                                    <h4>Email</h4>
                                    <p>mfarazakram0786@gmail.com</p>
                                </div>
                            </div>

                            <div className="contact__detail">
                                <div className="contact__icon">
                                    <Phone />
                                </div>
                                <div className="contact__text">
                                    <h4>Phone</h4>
                                    <p>+91 8604667894</p>
                                </div>
                            </div>

                            <div className="contact__detail">
                                <div className="contact__icon">
                                    <Location />
                                </div>
                                <div className="contact__text">
                                    <h4>Location</h4>
                                    <p>UP, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact__social">
                            <h3>Connect with me</h3>
                            <div className="contact__social-icons">
                                <a href="https://github.com/farazakram123" target="_blank" className="contact__social-icon">
                                    <Github />
                                </a>
                                <a href="https://www.linkedin.com/in/mohd-faraz-akram-0b10a6207" target="_blank" className="contact__social-icon">
                                    <Linkedin />
                                </a>
                                <a href='mailto:mfarazakram0786@gmail.com' target="_blank" className="contact__social-icon">
                                    <Gmail />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact__form-container">
                        <form className="contact__form">
                            <div className="contact__form-group contact__form-group--half">
                                <label htmlFor="name" className="contact__label">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="contact__input"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div className="contact__form-group contact__form-group--half">
                                <label htmlFor="email" className="contact__label">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="contact__input"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div className="contact__form-group">
                                <label htmlFor="subject" className="contact__label">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="contact__input"
                                    placeholder="How can I help you?"
                                    required
                                />
                            </div>

                            <div className="contact__form-group">
                                <label htmlFor="message" className="contact__label">Message</label>
                                <textarea
                                    id="message"
                                    className="contact__textarea"
                                    placeholder="Your message here..."
                                    rows="6"
                                    required
                                ></textarea>
                            </div>

                            <Link to='/under-development'>
                            <button type="submit" className="contact__submit-btn">Send Message</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
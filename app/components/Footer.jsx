import './Footer.css'
import { AiFillGithub, AiFillInstagram, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai'
import React from 'react'
import { Project } from './Project';
import Info from './Info';
import Contact from './Contact';
import { About } from './About';
export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <ul className="footer-menu">
                    <a href="#home">
                        <li>Home</li>
                    </a>
                    <a href="#projects">
                        <li>Projects</li>
                    </a>
                    <a href="#contact">
                        <li>Contact</li>
                    </a>
                    <a href="#about">
                        <li>About me</li>
                    </a>
                </ul>
                <div className="socials">
                    <a href="https://github.com/gams0318" target='_blank'><AiFillGithub /></a>
                    <a href="https://www.instagram.com/gams_gj03/" target='_blank'><AiFillInstagram /></a>
                    <a href="https://www.linkedin.com/in/garima-joshi-614b38227/" target='_blank'><AiFillLinkedin /></a>
                    <a href="https://twitter.com/Garima_0318" target='_blank'><AiFillTwitterCircle /></a>
                </div>
            </div>
        </div>
    )
}

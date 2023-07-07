'use client';
import './Info.css'
import { AiFillGithub, AiFillInstagram, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai'
import React from 'react'
import { Project } from './Project';
import Contact from './Contact';
import { UseTypingEffect } from '../hooks/UseTypingEffect'

const Info = () => {

    return (
        <div className="Info" id="home">
            <div className="Info-container">

                <div className="Info-heading">
                    <h1>Hey There</h1> <h1> Garima here! <br />An aspiring <span> <UseTypingEffect /></span>
                    </h1>

                    <div className="Info-buttons">
                        <a href="#contact"> <button >Contact</button></a>
                        <a href="#projects"><button>Projects</button></a>
                    </div>
                    <div className="Social-icons">
                        <a href="https://github.com/gams0318" target='_blank'><AiFillGithub /></a>
                        <a href="https://www.instagram.com/gams_gj03/" target='_blank'><AiFillInstagram /></a>
                        <a href="https://www.linkedin.com/in/garima-joshi-614b38227/" target='_blank'><AiFillLinkedin /></a>
                        <a href="https://twitter.com/Garima_0318" target='_blank'><AiFillTwitterCircle /></a>
                    </div>
                </div>
                <div className="main-image">
                    <img src="https://res.cloudinary.com/dwazmjaph/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688664214/mypic_azgwqr.jpg" />
                </div>
            </div>
        </div>
    )
}

export default Info
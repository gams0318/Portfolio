import './About.css'
import React from 'react'

export const About = () => {
    return (
        <div className="about" id="about">
            <h1>About me</h1>
            <div className="about-container">
                <div className="about-text">
                    <p>Hello, I'm Garima Joshi, a passionate and skilled web developer. With a strong background in coding and a love for creating visually appealing and functional websites, I strive to deliver high-quality solutions to my clients. I am dedicated to staying up to date with the latest web development trends and technologies to provide the best possible user experiences.</p>

                    <p>The portfolio is designed with a clean and modern layout, focusing on simplicity and showcasing the projects effectively. The use of colors, typography, and imagery is carefully selected to create an aesthetically pleasing and professional look. The portfolio is responsive and optimized for a seamless browsing experience across different devices and screen sizes.</p>
                </div>
                <div className="skills">
                    <h2>Skills</h2>
                    <div>
                        <h3>Javascript</h3>
                        <h3>Node JS</h3>
                        <h3>MongoDB</h3>
                        <h3>HTML</h3>
                        <h3>CSS</h3>
                        <h3>Express</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

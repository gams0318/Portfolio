'use client';
import React, { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2wdfebq', 'template_gbl4c19', form.current, 'SZ2JNJ3A6Zce9Ep0b')
            .then((result) => {
                console.log(result.text);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="form" id="contact">
            <div className="form-container">
                <div className="form-text">
                    <h1>Lets Chat <br />
                        Tell me about your project</h1>
                    <span>Lets create something together🔥</span>
                </div>
                <form ref={form} onSubmit={sendEmail}>

                    <div className="form-heading">
                        <h1>Send me a message</h1><span>🚀</span>
                    </div>
                    <label htmlFor="user_name">Name:</label>
                    <input type="text" id="user_name" name="user_name" placeholder='Enter name' required />
                    <label htmlFor="user_email">Email:</label>
                    <input type="email" id="user_email" name="user_email" placeholder='Enter email' required />
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" placeholder='Type message' required></textarea>
                    <button type="submit">Send</button>


                </form>
            </div>
        </div>
    )
}

export default Contact
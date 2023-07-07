"use client";
import './nav.css'
import { Project } from './Project';
import Info from './Info';
import Contact from './Contact';
import { About } from './About';
import { useState, useEffect } from 'react';
const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false)
    useEffect(() => {
        if (openMenu)
            document.body.classList.add('no-scroll')
        else
            document.body.classList.remove('no-scroll')
    }, [openMenu])
    const menuHandler = () => {
        setOpenMenu(!openMenu)
    }
    return (<><nav>
        <div className="nav-container">
            <h1>Gams<span>.com</span></h1>

            <ul className={openMenu ? "nav-menu active" : "nav-menu "}>
                <a href="#home"><li className="item">
                    Home
                </li></a>
                <a href="#about"><li className="item">
                    About me
                </li></a>
                <a href="#projects"><li className="item">
                    Projects
                </li></a>
                <a href="#contact"><li className="item">
                    Contact me
                </li></a>
            </ul>

            <div className="nav-right">
                <button>Hire me</button>
            </div>
            <div onClick={menuHandler} className={openMenu ? "toggle active" : "toggle"}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </div>
    </nav></>
    )
}
export default Nav;
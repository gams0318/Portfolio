import './Project.css'
import React from 'react'
//import image from '../../public/116697143_563421451020730_2658225311049634513_n.png'
export const Project = () => {
    return (
        <div className="projects" id="projects">
            <div className="project-container">
                <h1>Projects</h1>
                <div className="project">
                    <img src="https://res.cloudinary.com/dwazmjaph/image/upload/v1688665146/Screenshot_2023-07-06_225926_hmflt3.jpg" alt="" />
                    <p>YelpCamp</p></div>
                <div className="project">
                    <img src="https://res.cloudinary.com/dwazmjaph/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1688665147/Screenshot_2023-07-06_230524_lifi47.png" alt="" />
                    <p>Score Keeper</p>
                </div>
                <div className="project">
                    <img src="https://res.cloudinary.com/dwazmjaph/image/upload/v1688665149/Screenshot_2022-12-25_212107_nmjbsj.png" alt="" />
                    <p>Mental health <br />
                        assessment</p>
                </div>
                <div className="project">
                    <img src="https://res.cloudinary.com/dwazmjaph/image/upload/v1688665147/Screenshot_2023-07-06_230640_ndf57f.png" alt="" />
                    <p>Pokemon API</p>
                </div>
                <div className="project">
                    <img src="https://res.cloudinary.com/dwazmjaph/image/upload/v1688665146/Screenshot_2023-07-06_230353_vvoshx.png" alt="" />
                    <p>TO-DO List</p>
                </div>
            </div>
        </div>

    )
}

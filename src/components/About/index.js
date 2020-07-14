import React from 'react'
import { Parallax } from 'react-parallax'
import bgImage from '../../images/star-wars-backgrounds-26.png'
import mT1red from '../../images/mT1red.png'
import './styles.css'

export default function About() {
    return (
        <Parallax bgImage={bgImage} strength={600}>
            <main className="About row mb-200">
                <div className="col-lg-2 col-xl-3 p-0 d-flex flex-wrap align-content-center justify-content-center"><img src={mT1red} height="300px" width="auto"/></div>
                <div className="col-lg-8 col-xl-6 col-md p-0 rounded-lg mt-5 mr-0 mb-5 ml-0 text-center">
                    <div className="row">
                        <div className="col p-2 mb-0 text-red bg-black h3 rounded"><a id="AboutMe">About Me</a></div>
                    </div>
                    <div className="row">
                            <div className="col-lg-6 bg-black p-0 m-0 rounded">
                                <img className="img-fluid rounded profilePic" alt="" />
                            </div>
                        <div className="col-lg-6 pt-3 pr-5 pb-3 pl-5 m-0 rounded bg-black text-red border border-dark h5">
                            I'm a Full Stack Web Developer trying to get my foot in the door.
                            I'm currently coding in a University of Arizona coding bootcamp focusing
                            on React.js, Github, Node.js, MySQL, and MongoDB. In the meantime you can
                            see what projects I'm working on by checking out my Github repositories
                            by clicking the link below!
                        <br />
                            <br />
                        Areas of Expertise:
                        <br />
                            <br />
                            <div className="row">
                                <div className="col-6">
                                    • React.js<br />
                            • MySQL<br />
                            • CSS<br />
                            • Bootstrap<br />
                                </div>
                                <div className="col-6">
                                    • MongoDB<br />
                            • jQuery<br />
                            • Node.js<br />
                            • Github
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col pt-3 pb-3 rounded bg-black text-red border border-dark h4 text-center">
                            <div className="row">
                                <div className="col-md-6">
                                    Check out my LinkedIn
                        <a className=" text-info mr-0" href="https://www.linkedin.com/in/marcustravis" > here!</a>
                                </div>
                                <div className="col-md-6">
                                    Check out my Github
                        <a className=" text-info mr-0" href="https://github.com/MarcusTravis" > here!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-xl-3 p-0 d-flex flex-wrap align-content-center justify-content-center"><img src={mT1red} height="300px" width="auto"/></div>
            </main>
        </Parallax>
    )
}
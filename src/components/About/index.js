import React from 'react'
import { Parallax } from 'react-parallax'
import Tilt from 'react-parallax-tilt'
import bgImage from '../../images/star-wars-backgrounds-26.png'
import profilePic from '../../images/ProfilePic.png'
import mT1red from '../../images/mtlogoWht.png'
import react from '../../images/react-logo.png'
import mongo from '../../images/mongodb-logo.png'
import mysql from '../../images/mysql-logo.png'
import jquery from '../../images/jquery-logo.png'
import css from '../../images/css-logo.png'
import node from '../../images/nodejs-logo.png'
import bootstrap from '../../images/bootstrap-logo.png'
import github from '../../images/git-logo.jpg'
import javascript from '../../images/js-logo.png'
import giticon from '../../images/github-icon.png'
import linkedicon from '../../images/linkedin-icon.png'
import './styles.css'

export default function About() {
    return (
        <Parallax bgImage={bgImage} strength={600}>
            <Tilt><main className="About row mr-0 ml-0 mb-200">
                <div className="col-lg-2 col-xl-3 p-0 d-flex flex-wrap align-content-center justify-content-center"><Tilt><img src={mT1red} height="300px" width="auto" /></Tilt></div>
                <div className="col-lg-8 col-xl-6 col-md p-0 rounded-lg mr-0 mb-5 ml-0 text-center">
                    <div className="row">
                        <div className="col nosifer p-2 m-3 text-white bg-black h3 rounded"><Tilt><a id="AboutMe" href="#" className="text-white">About Me</a></Tilt></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 bg-black border border-white rounded d-flex align-items-center p-0">
                            <Tilt><img className="img-fluid rounded" src={profilePic} alt="" /></Tilt>
                        </div>
                        <div className="col-lg-6 rose pt-3 pr-5 pb-3 pl-5 m-0 rounded bg-black text-white border border-white h5">
                            <Tilt>
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
                                    <div className="col-4"><Tilt><img className="bg-white p-1 m-1 transform" src={react} height="60px" /></Tilt></div>
                                    <div className="col-4"><Tilt><img className="bg-white p-1 m-1 transform" src={mongo} height="60px" /></Tilt></div>
                                    <div className="col-4"><Tilt><img className="bg-white p-1 m-1 transform" src={mysql} height="60px" /></Tilt></div>
                                </div>
                                <div className="row">
                                    <div className="col-4"><Tilt><img className="bg-white p-1 m-1 transform" src={github} height="60px" /></Tilt></div>
                                    <div className="col-4"><Tilt><img className="bg-white p-1 m-1 transform" src={jquery} height="60px" /></Tilt></div>
                                    <div className="col-4"><Tilt><img className="bg-white p-1 m-1 transform" src={node} height="60px" /></Tilt></div>
                                </div>
                                <div className="row">
                                    <div className="col-4"><Tilt><img className="bg-white p-1 m-1 transform" src={bootstrap} height="60px" /></Tilt></div>
                                    <div className="col-4"><Tilt><img className="bg-white p-1 m-1 transform" src={css} height="60px" /></Tilt></div>
                                    <div className="col-4"><Tilt><img className="bg-white p-1 m-1 transform" src={javascript} height="60px" /></Tilt></div>
                                </div>
                            </Tilt>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col pb-2 rounded bg-white border border-dark h4 text-center">
                            <div className="row">
                                <div className="col-md-6">
                                    <Tilt>
                                        <img src={linkedicon} height="48px" className="mr-2 mb-2 mt-4" />
                                        <a className="nosifer text-black mr-0" href="https://www.linkedin.com/in/marcustravis" >Check out my LinkedIn here!</a>
                                    </Tilt>
                                </div>
                                <div className="col-md-6">
                                    <Tilt>
                                        <img src={giticon} height="48px" className="mr-2 mb-2 mt-4" />
                                        <a className="nosifer text-black mr-0" href="https://github.com/MarcusTravis" >Check out my Github here!</a>
                                    </Tilt>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-xl-3 p-0 d-flex flex-wrap align-content-center justify-content-center"><Tilt><img src={mT1red} height="300px" width="auto" /></Tilt></div>
            </main></Tilt>
        </Parallax>
    )
}
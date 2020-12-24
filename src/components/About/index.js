import React from 'react'
import { Parallax } from 'react-parallax'
import Tilt from 'react-parallax-tilt'
import AboutHeader from '../AboutHeader'
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
        <Parallax bgImage={bgImage} strength={700}>
            <Tilt>
                <AboutHeader />
                <main className="row mb-200">
                    <div className="col-lg-2 col-xl-3 About p-0 d-flex flex-wrap align-content-center justify-content-center"><Tilt><img src={mT1red} height="300px" width="auto" /></Tilt></div>
                    <div className="col-lg-8 col-xl-6 About p-0 rounded mr-0 ml-0 text-center">
                        <div className="row pl-0 pr-0 ml-0 mr-0">
                            <div className="col-lg-6 bg-black border border-white rounded d-flex align-items-center p-0">
                                <Tilt><img className="img-fluid rounded" src={profilePic} alt="" /></Tilt>
                            </div>
                            <div className="col-lg-6 height mb-0 pt-2 rose rounded bg-black text-white border border-white h5">
                                <Tilt>
                                    I'm a Full Stack Web Developer currently working on a Bachelor's Degree in Computer Science.
                                    I'm a recent Graduate at the University of Arizona Full Stack coding Bootcamp focusing on React.js, Github, Node.js, MySQL, and MongoDB. In the meantime, you can see what projects I'm working on by checking out my Github repositories.
                                    Just click the link below!
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
                        <Tilt>
                            <div className="row pl-0 pr-0 ml-0 mr-0">
                                <div className="col pb-2 rounded bg-white h4 text-center">
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
                        </Tilt>
                    </div>
                    <div className="col-lg-2 col-xl-3 About p-0 d-flex flex-wrap align-content-center justify-content-center"><Tilt><img src={mT1red} height="300px" width="auto" /></Tilt></div>
                </main></Tilt>
        </Parallax>
    )
}
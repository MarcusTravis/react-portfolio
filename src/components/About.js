import React from 'react'
import '../App.css'

export default function About() {
    return (
        <div className="About" >
         <main class="container-fluid">
            <div class="row  mb-5">
                <div class="col-lg-2 col-xl-3"></div>
                <div class="col-lg-8 col-xl-6 col-md rounded-lg bg-seconsdary mt-5 mr-0 mb-5 ml-0 text-lg-left text-center ">
                <div class="row mb-0">
                    <div class="col p-2 mb-0 text-red bg-black h3 rounded">About Me</div>
                </div>
                <div class="row">
                    <div class="col-lg-6 bg-black p-0 m-0 d-flex justify-content-center rounded">
                    <img class="img-fluid rounded profilePic" alt="" />
                    </div>
                    <div class="col-lg-6 pt-3 pr-5 pb-3 pl-5 m-0 rounded bg-black text-red border border-dark h5">
                    I'm an entry level Web Developer trying to get my foot in the door. 
                    I'm currently coding in a University of Arizona coding bootcamp focusing 
                    on React.js, Github, Node.js, MySQL, and MongoDB. In the meantime you can 
                    see what projects I'm working on by checking out my Github repositories 
                    by clicking the link below!
                        <br/>
                        <br/>
                        Areas of Expertise:
                        <br/>
                        <br/>
                        <div className="row">
                            <div className="col-6">
                            • React.js<br/>
                            • MySQL<br/>
                            • CSS<br/>
                            • Bootstrap<br/>
                            </div>
                            <div className="col-6">
                            • MongoDB<br/>
                            • jQuery<br/>
                            • Node.js<br/>
                            • Github
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col pt-3 pb-3 rounded bg-black text-red border border-dark h4 text-center">
                    <div class="row">
                        <div class="col-md-6">
                        You can find my LinkedIn
                        <a class=" text-info mr-0" href="https://www.linkedin.com/in/marcustravis" > here!</a>
                        </div>
                        <div class="col-md-6">
                        You can find my Github
                        <a class=" text-info mr-0" href="https://github.com/MarcusTravis" > here!</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div class="col-lg-2 col-xl-3"></div>
            </div>
          </main>
        </div >
    )
}
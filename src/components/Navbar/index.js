import React from 'react'
import Tilt from 'react-parallax-tilt'

export default function Navbar() {
    return (
        <nav className="container-fluid navbarCustom">
            <div className="row">
                    <header className="col-md-3 nosifer text-center pt-2 pb-1 bg-white">
                        <p title="I love webdev!" className="h3 pt-2">
                        <Tilt><a id="Top">Marcus Travis</a></Tilt>
                        </p>
                    </header>
                    <div className="col-md-9 nosifer pt-2 pb-1 bg-black ml-auto text-lg-right text-center">
                        <div className="bg-black rounded h3 d-inline-block mr-5"><Tilt><a className="text-white" href="#AboutMe">About Me</a></Tilt></div>
                        <div className="bg-black rounded h3 d-inline-block mr-5"><Tilt><a className="text-white" href="#Projects">Projects</a></Tilt></div>
                        <div className="bg-black rounded h3 d-inline-block"><Tilt><a className=" text-white mr-0" href="#ContactMe">Contact Me</a></Tilt></div>
                    </div>
            </div>
        </nav>
    )
}

import React from 'react'

export default function Navbar() {
    return (
        <nav className="container-fluid navbarCustom">
            <div className="row">
                <header className="col-md-3 nosifer text-center pt-2 pb-1 bg-white">
                    <p title="I love webdev!" className="h3 pt-2">
                        <a id="Top">
                        Marcus Travis
                        </a>
                    </p>
                </header>
                <div className="col-md-9 nosifer pt-2 pb-1 bg-black ml-auto text-lg-right text-center">
                    <div className="bg-black rounded h3 d-inline-block mr-5"><a className="text-white" href="#AboutMe">About Me</a></div>
                    <div className="bg-black rounded h3 d-inline-block mr-5"><a className="text-white" href="#Projects">Projects</a></div>
                    <div className="bg-black rounded h3 d-inline-block"><a className=" text-white mr-0" href="#ContactMe">Contact Me</a></div>
                </div>
            </div>
        </nav>
    )
}

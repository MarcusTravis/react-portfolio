import React from 'react'

export default function Navbar() {
    return (
        <nav className="container-fluid navbarCustom">
            <div className="row">
                <header className="col-md-2  text-center pt-2 pb-1 bg-red">
                    <p title="I love webdev!" className="h3">
                        Marcus Travis
                    </p>
                </header>
                <div className="col-md-10 pt-2 pb-1 bg-black ml-auto text-lg-right text-center">
                    <a href="#AboutMe"><button className="bg-black rounded text-red h4 mr-3">About Me</button></a>
                    <a href="#Projects"><button className="bg-black rounded text-red h4 mr-3">Projects</button></a>
                    <a className="mr-0" href="#ContactMe"><button className="bg-black rounded text-red h4">Contact Me</button></a>
                </div>
            </div>
        </nav>
    )
}

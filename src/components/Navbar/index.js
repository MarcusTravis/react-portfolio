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
                    <a className="navbar-brand nav-link text-red h2" href="index.html">About</a>
                    <a className="navbar-brand nav-link text-red h2" href="portfolio.html">Portfolio</a>
                    <a className="navbar-brand nav-link text-red h2 mr-0" href="contact.html" >Contact</a>
                </div>
            </div>
        </nav>
    )
}

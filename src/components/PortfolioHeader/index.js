import React from 'react'
import Tilt from 'react-parallax-tilt'

export default function PortfolioHeader() {
    return (
        <Tilt>
            <div className="row pl-0 pr-0 ml-0 mr-0">
                <header className="col-12 text-center pt-2 pb-1 bg-black text-red opacity-90 pl-0 pr-0">
                    <p title="I love webdev!" className="h3">
                        <Tilt><a id="Projects" href="#" className="nosifer text-white border border-0">Projects!</a></Tilt>
                    </p>
                </header>
            </div>
        </Tilt>
    )
}
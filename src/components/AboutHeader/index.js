import React from 'react'
import Tilt from 'react-parallax-tilt'
import './style.css'

export default function AboutHeader() {
    return (
        <Tilt>
            <div className="row pl-0 pr-0 ml-0 mr-0 mt-200">
                <header className="col-12 text-center pt-2 pb-1 text-red opacity-90 pl-0 pr-0">
                    <p title="I love webdev!" className="h3">
                        <Tilt><a id="AboutMe" href="#" className="nosifer text-white border border-0">About Me</a></Tilt>
                    </p>
                </header>
            </div>
        </Tilt>
    )
}

import React from 'react'
import Tilt from 'react-parallax-tilt'
import './styles.css'


export default function Footer() {
    return (
        <Tilt>
            <div className="row">
                <a href="#Top" className="col-12 nosifer p-2 mt-3 h4 text-center border border-secondary rounded text-white bg-black">Back to Top</a>
            </div>
        </Tilt>
    )
}

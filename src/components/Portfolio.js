import React from 'react'
import Card from "./Card";

import '../App.css'

export default function Portfolio() {
    return (
        <div className="container-fluid Portfolio ">
            <div className="row ">
                <div className="col-md-3 justify-content-center offset-1"><Card/></div>
                <div className="col-md-3 justify-content-center offset-1"><Card/></div>
                <div className="col-md-3 justify-content-center offset-1"><Card/></div>
            </div>
        </div>
    )
}


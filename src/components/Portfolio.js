import React from 'react'
import Card from "./Card";

import '../App.css'

export default function Portfolio() {
    return (
        <div className="container-fluid">
            <div className="row Portfolio">
                <div className="col-12">
                    <Card />
                </div>
            </div>
            {/* <div className="row PortfolioCompliment"></div> */}
        </div>
    )
}


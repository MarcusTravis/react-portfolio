import React from 'react';
import About from './About';
import Portfolio from './Portfolio';
import PortfolioHeader from './PortfolioHeader';
import '../App.css'

export default function Main() {
    return (
        <div className="container-fluid parallax p-0">
            <div className="row no-gutters">
                <div className="col-12">
                    <About />
                </div>
                    <PortfolioHeader/>
                <div className="col-12">
                    <Portfolio />
                </div>
            </div>
        </div>
    )
}

import React from 'react';
import About from './About';
import Portfolio from './Portfolio';
import PortfolioHeader from './PortfolioHeader';
import '../App.css'

export default function Main() {
    return (
        <div className="container-fluid parallax p-0">
            <About/>
            <PortfolioHeader />
            <Portfolio />
        </div>
    )
}

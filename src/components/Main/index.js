import React from 'react';
import About from '../About/index.js';
import Portfolio from '../Portfolio';
import PortfolioHeader from '../PortfolioHeader';
import Contact from '../Contact';
import './styles.css';

export default function Main() {
    return (
        <div className="container-fluid parallax pl-0 pr-0">
            <About/>
            <PortfolioHeader />
            <Portfolio />
            <Contact/>
        </div>
    )
}

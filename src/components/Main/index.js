import React from 'react';
import About from '../About/index.js';
import Portfolio from '../Portfolio';
import PortfolioHeader from '../PortfolioHeader';
import './styles.css';

export default function Main() {
    return (
        <div className="container-fluid parallax">
            <About/>
            <PortfolioHeader />
            <Portfolio />
        </div>
    )
}

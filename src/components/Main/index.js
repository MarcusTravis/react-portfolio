import React from 'react';
import About from '../About/index.js';
import Portfolio from '../Portfolio';
import PortfolioHeader from '../PortfolioHeader';
import Contact from '../Contact';
import Footer from '../Footer';
import './styles.css';

import Navbar from '../Navbar';

export default function Main() {
    return (
        <div className="container-fluid parallax p-0 m-0">
            <Navbar/>
            <About/>
            <PortfolioHeader />
            <Portfolio />
            <Contact/>
            <Footer/>
        </div>
    )
}

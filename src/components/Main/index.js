import React from 'react';
import About from '../About/index.js';
import Portfolio from '../Portfolio';
import PortfolioHeader from '../PortfolioHeader';
import Contact from '../Contact';
import Footer from '../Footer';
import ReactParticles from 'react-particles-js';
import particlesConfig from './particles-config';
import Navbar from '../Navbar';

export default function Main() {
    return (
        
        <Particles>
                <div className="container-fluid parallax p-0 m-0">
            <Navbar/>
                    <About />
                    <PortfolioHeader />
                    <Portfolio />
                    <Contact />
                    <Footer />
                </div>
        </Particles>
    )
}

function Particles({ children }) {
    return (
        <div style={{ position: 'relative' }}>
            <ReactParticles
                params={particlesConfig}
                style={{
                    position: 'absolute',
                    zIndex: -1,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    top: 0
                }}
            />
            {children && <div style={{ position: 'relative' }}>{children}</div>}
        </div>
    );
}


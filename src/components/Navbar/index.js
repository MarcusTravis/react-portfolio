import React from "react";
import logo from "../../images/mtlogoWht.png";

export default function Navbar() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <nav className="wrap nav" aria-label="Primary">
        <a className="brand" href="#top">
          <img src={logo} alt="" />
          <span>Marcus Travis</span>
        </a>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a className="hire-link" href="#hire">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

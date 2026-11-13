import React from "react";
import Navbar from "../Navbar";
import About from "../About";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Footer from "../Footer";

export default function Main() {
  return (
    <div id="top">
      <Navbar />
      <main id="main">
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

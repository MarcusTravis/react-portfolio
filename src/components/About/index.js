import React from "react";
import profilePic from "../../images/ProfilePic.png";

export default function About() {
  return (
    <section className="hero wrap" id="about">
      <div className="hero-grid">
        <div>
          <p className="eyebrow">Freelance developer</p>
          <h1>I build free, ad-free tools.</h1>
          <p className="lede">
            I&apos;m Marcus Travis, a freelance developer who designs and ships
            useful sites with no annoying ads. The tools below are live,
            independently useful, and free to use. If you want something like
            that built for you, I&apos;d like to hear from you.
          </p>
          <div className="actions">
            <a className="btn btn-primary" href="#hire">
              Hire me
            </a>
            <a className="btn btn-ghost" href="#projects">
              See my tools
            </a>
          </div>
        </div>
        <img
          className="portrait"
          src={profilePic}
          alt="Marcus Travis smiling with his dog"
        />
      </div>
    </section>
  );
}

import React from "react";
import profilePic from "../../images/ProfilePic.png";

export default function About() {
  return (
    <section className="hero wrap" id="about">
      <div className="hero-grid">
        <div>
          <p className="eyebrow">BIM Manager by day · web developer off the clock</p>
          <h1>I build free, ad-free tools.</h1>
          <p className="lede">
            I&apos;m Marcus Travis. By day I&apos;m a BIM Manager in
            construction, after starting out as a pipefitter and orbital
            welder. On evenings and weekends I build fast, useful websites
            with no annoying ads. The tools below are free to use.
          </p>
          <p className="credential">
            Full Stack Web Development certificate, University of Arizona
            (2020).
          </p>
          <div className="actions">
            <a className="btn btn-primary" href="#hire">
              Work with me
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

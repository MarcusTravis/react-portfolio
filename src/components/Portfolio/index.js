import React from "react";
import projects from "../../data/projects";

export default function Portfolio() {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="section-head">
          <h2>Projects</h2>
          <p>
            Free, ad-free tools I&apos;ve built and continue to maintain. New
            sites get added here as they launch.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <a
              className="project-card"
              href={project.url}
              key={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <span className="visit">Visit site →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

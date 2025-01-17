import React from "react";

const projects = [
  { title: "Project 1", description: "Description 1", demo: "#", repo: "#" },
  { title: "Project 2", description: "Description 2", demo: "#", repo: "#" },
];

const Portfolio = () => (
  <section className="portfolio">
    {projects.map((project, index) => (
      <div key={index} className="card">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.demo} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
        <a href={project.repo} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      </div>
    ))}
  </section>
);

export default Portfolio;

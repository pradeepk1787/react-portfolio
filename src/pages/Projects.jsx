import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

import "./Projects.css";

function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section className="projects">
      <div className="projects-container">

        <div className="projects-header">
          <span className="section-tag">My Work</span>

          <h1>Selected Projects</h1>

          <p>
            A collection of projects that showcase my experience
            with React, JavaScript, APIs, accessibility,
            responsive design, and modern frontend development.
          </p>
        </div>

        <div className="projects-section">
          <h2>Featured Projects</h2>

          <p className="section-description">
            Production-quality applications demonstrating
            practical problem-solving and modern frontend
            architecture.
          </p>

          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </div>

        <div className="projects-section">
          <h2>Other Projects</h2>

          <p className="section-description">
            Smaller experiments and learning projects that
            strengthened my understanding of React fundamentals
            and frontend best practices.
          </p>

          <div className="projects-grid">
            {otherProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
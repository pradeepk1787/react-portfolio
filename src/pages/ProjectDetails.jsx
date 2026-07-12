import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

import "./ProjectDetails.css";
import { statusLabels } from "../utils/projectStatus";
import NotFound from "./NotFound";

function ProjectDetails() {
  const { projectId } = useParams();

  const project = projects.find((currProject) => currProject.id === projectId);

  if (!project) {
    return (
        <NotFound />
    );
  }

  return (
    <section className="project-details">
      <div className="project-details-container">
        {/* Hero */}
        <div className="project-hero">
          <Link className="back-link" to="/projects">
            ← Back to Projects
          </Link>
          <span className={`project-status ${project.status}`}>
            {statusLabels[project.status]}
          </span>

          <h1>{project.title}</h1>

          <p className="project-description">{project.description}</p>

          <div className="project-links">
            <a
              className="btn-primary"
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>

            <a
              className="btn-secondary"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Technical Highlights */}
        <section className="project-section">
          <h2>Technical Highlights</h2>
          <p>
            Technical decisions that improved maintainability, accessibility,
            and user experience.
          </p>
          <div className="highlights-grid">
            {project.technicalHighlights.map((highlight) => (
              <div key={highlight} className="highlight-card">
                {highlight}
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="project-section">
          <h2>Features</h2>
          <p>Core functionality implemented in this project.</p>

          <div className="feature-grid">
            {project.features.map((feature) => (
              <div key={feature} className="feature-card">
                <span className="feature-icon">✓</span>

                <span>{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="project-section">
          <h2>Tech Stack</h2>
          <p>Technologies used to build the application.</p>

          <div className="tech-stack">
            {project.tech.map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Future Enhancements */}
        <section className="project-section">
          <h2>Future Enhancements</h2>
          <p>Potential improvements planned for future versions.</p>

          <div className="feature-grid">
            {project.plannedEnhancements.map((item) => (
              <div key={item} className="feature-card">
                <span className="feature-icon">✓</span>

                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="project-footer">
          <Link className="back-link" to="/projects">
            ← Back to Projects
          </Link>
        </footer>
      </div>
    </section>
  );
}

export default ProjectDetails;

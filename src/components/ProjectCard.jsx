import { Link } from "react-router-dom";
import "./ProjectCard.css";
import { statusLabels } from "../utils/projectStatus";

function ProjectCard({ project }) {
  
  
  const isCurrentPortfolio = project.id === "portfolio-router"

  return (
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">
          {project.title}

          {isCurrentPortfolio && <span className="current-badge">Current</span>}
        </h3>

        <span className={`project-status ${project.status}`}>
          {statusLabels[project.status]}
        </span>
      </div>

      <p className="project-description">{project.description}</p>

      <div className="project-tech">
        {project.tech.map((tech) => (
          <span key={tech} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>

      <div className="project-actions">
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

        <Link className="details-link" to={`/projects/${project.id}`}>
          Details →
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;

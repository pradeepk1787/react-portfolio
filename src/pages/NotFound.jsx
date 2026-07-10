import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found-container">
        <h1>404</h1>

        <h2>Oops! Page Not Found</h2>

        <p>
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <div className="not-found-actions">
          <Link className="btn-primary" to="/">
            Back Home
          </Link>

          <Link className="btn-secondary" to="/projects">
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
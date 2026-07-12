import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <h2>Let's Connect</h2>

        <div className="footer-links">

          <a
            href="https://github.com/pradeepk1787"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/pradeep-1787pk"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:pradeepkamble1787@gmail.com">
            Email
          </a>

        </div>

        <div className="footer-divider"></div>

        <p>
          © {new Date().getFullYear()} Pradeep Kamble
        </p>

        <span>
          Built with React • Vite • CSS
        </span>

      </div>
    </footer>
  );
}

export default Footer;
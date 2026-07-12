import { Link } from "react-router-dom";
import "./Home.css";
import profileImage from "../assets/images/profile.png";

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-tag">Frontend Developer</span>

          <h1>
            Hi, I'm <span className="highlight">Pradeep Kamble</span>
          </h1>

          <h2>React & JavaScript Developer</h2>

          <p>
            I build responsive and modern web applications using React,
            JavaScript, and contemporary frontend technologies. Passionate about
            creating intuitive user experiences, integrating APIs, and
            continuously improving through practical projects and real-world
            problem solving.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">
              View Projects
            </Link>

            <Link to="/contact" className="btn btn-secondary">
              Contact Me
            </Link>
          </div>

          <div className="social-links">
            <a href="https://github.com/pradeepk1787" target="_blank">
              GitHub
            </a>

            <a href="#">LinkedIn</a>

            <a href="#">Download CV</a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-wrapper">
            <img src={profileImage} alt="Pradeep Kamble" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

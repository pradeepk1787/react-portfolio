import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-header">
          <span className="section-tag">About Me</span>

          <h1>Building Modern Web Experiences</h1>

          <p>
            Passionate about creating responsive, user-friendly,
            and scalable web applications using modern frontend
            technologies.
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h2>Who I Am</h2>

            <p>
              Hello! I'm Pradeep Kamble, a frontend developer with a
              strong interest in React and modern JavaScript development.
              I enjoy transforming ideas into clean, interactive, and
              responsive user experiences.
            </p>

            <p>
              My focus is on building maintainable applications using
              component-based architecture, API integration, routing,
              and modern development practices.
            </p>

            <p>
              I continuously explore new technologies, improve my
              problem-solving abilities, and work on practical projects
              that strengthen both technical and engineering skills.
            </p>
          </div>

          <div className="skills-card">
            <h2>Tech Stack</h2>

            <div className="skills-grid">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>React Router</span>
              <span>REST APIs</span>
              <span>Git & GitHub</span>
              <span>Responsive Design</span>
            </div>
          </div>
        </div>

        <div className="about-values">
          <div className="value-card">
            <h3>💡 Problem Solving</h3>

            <p>
              I enjoy breaking complex challenges into
              simple, maintainable solutions.
            </p>
          </div>

          <div className="value-card">
            <h3>🎨 User Experience</h3>

            <p>
              Clean interfaces and intuitive interactions
              are at the center of everything I build.
            </p>
          </div>

          <div className="value-card">
            <h3>🚀 Continuous Learning</h3>

            <p>
              Technology evolves rapidly, and I believe
              growth comes through practical implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
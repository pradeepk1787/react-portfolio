import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <span className="section-tag">Get In Touch</span>

          <h1>Let's Build Something Great Together</h1>

          <p>
            Whether you want to discuss projects, frontend development,
            or collaboration opportunities, feel free to connect with me.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">📧</div>

            <h3>Email</h3>

            <p>
              Feel free to reach out via email for professional
              discussions or collaboration opportunities.
            </p>

            <a href="mailto:pradeepkamble1787@gmail.com">
              pradeepkamble1787@gmail.com
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">🐙</div>

            <h3>GitHub</h3>

            <p>
              Explore my projects, contributions, and development
              journey on GitHub.
            </p>

            <a
              href="https://github.com/pradeepk1787"
              target="_blank"
              rel="noreferrer"
            >
              github.com/pradeepk1787
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">💼</div>

            <h3>LinkedIn</h3>

            <p>
              Connect professionally and stay updated with my
              latest work and experiences.
            </p>

            <a
              href="https://www.linkedin.com/in/pradeep-1787pk"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/pradeep-1787pk
            </a>
          </div>
        </div>

        <div className="contact-footer">
          <h2>Open to Learning & Collaboration</h2>

          <p>
            I enjoy working on practical projects, exploring new
            technologies, and connecting with developers who share
            a passion for building modern web experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
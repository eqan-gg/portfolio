import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-brand">
          <span className="brand-text">EC</span>
        </div>
        <div className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </nav>

      <main className="main-content">
        <header className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Eqan Chauhan</span>
            </h1>
            <p className="hero-subtitle">Frontend Web Developer</p>
            <p className="hero-description">
              I'm a BSCS student passionate about creating beautiful, responsive web experiences using modern technologies.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
        </header>

        <section id="about" className="section about">
          <div className="container">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
              <div className="about-text">
                <p>
                  I'm a Computer Science student with a passion for web development. I specialize in creating 
                  responsive, user-friendly websites using HTML, CSS, JavaScript, and React. I love turning 
                  complex problems into simple, beautiful designs.
                </p>
                <div className="skills">
                  <h3>Skills</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">HTML5</span>
                    <span className="skill-tag">CSS3</span>
                    <span className="skill-tag">JavaScript</span>
                    <span className="skill-tag">React</span>
                    <span className="skill-tag">Responsive Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="container">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-header">
                  <h3 className="project-title">Portfolio Website</h3>
                  <div className="project-links">
                    <a href="#" className="project-link">Live Demo</a>
                    <a href="#" className="project-link">Source Code</a>
                  </div>
                </div>
                <p className="project-description">
                  A modern, responsive portfolio website built with React and custom CSS. Features smooth animations and a clean design.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">CSS3</span>
                  <span className="tech-tag">JavaScript</span>
                </div>
              </div>

              <div className="project-card">
                <div className="project-header">
                  <h3 className="project-title">Todo App</h3>
                  <div className="project-links">
                    <a href="#" className="project-link">Live Demo</a>
                    <a href="#" className="project-link">Source Code</a>
                  </div>
                </div>
                <p className="project-description">
                  A feature-rich task management application with add, edit, delete functionality and local storage persistence.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Local Storage</span>
                  <span className="tech-tag">CSS3</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-content">
              <p className="contact-text">
                I'm always interested in new opportunities and exciting projects. 
                Let's discuss how we can work together!
              </p>
              <div className="contact-info">
                <a href="mailto:eqanchauhaan@gmail.com" className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>eqanchauhaan@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Eqan Chauhan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;


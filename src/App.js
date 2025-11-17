import React, { useEffect, useState } from 'react';
import './App.css';
import profileImage from './profile.jpeg';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [profileColor, setProfileColor] = useState(0);

  useEffect(() => {
    const handleSmoothScroll = (e) => {
      if (e.target.hash) {
        e.preventDefault();
        const target = document.querySelector(e.target.hash);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    const colorInterval = setInterval(() => {
      setProfileColor(prev => (prev + 1) % 6);
    }, 3000);

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(colorInterval);
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('light-mode');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="app">
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <span>Eqan Chauhan</span>
            <div className="logo-glow"></div>
          </div>
          <div className="nav-menu">
            <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={() => scrollToSection('about')}>
              <span>About</span>
            </a>
            <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => scrollToSection('projects')}>
              <span>Projects</span>
            </a>
            <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => scrollToSection('contact')}>
              <span>Contact</span>
            </a>
            <button className="theme-toggle" onClick={toggleDarkMode}>
              <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
          </div>
          <div className="nav-indicator"></div>
        </div>
      </nav>

      <section className="hero" id="hero">
        <div className="hero-bg">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
        </div>
        <div className="hero-content">
          
          <div className="profile-section">
            <div className="profile-container">
              <img 
                src={profileImage} 
                alt="Eqan Chauhan - Web Developer" 
                className="profile-img"
              />
            </div>
          </div>
          <div className="hero-badge">
            <span>Available for work</span>
            <div className="pulse-dot"></div>
          </div>
          <h1 className="hero-title">
            <span className="title-line">Eqan Chauhan</span>
            <span className="title-sub">Web Dev Developer</span>
          </h1>
          <p className="hero-description">
            Crafting digital experiences with passion and precision. 
            Transforming ideas into beautiful, functional web applications.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => scrollToSection('projects')}>
              <span>Explore My Work</span>
              <i className="fas fa-arrow-right"></i>
            </button>
            <button className="btn-secondary" onClick={() => scrollToSection('contact')}>
              <i className="fas fa-paper-plane"></i>
              <span>Let's Connect</span>
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Passion</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Learning</span>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span>Scroll</span>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">
            <span>About Me</span>
            <div className="title-decoration"></div>
          </h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate BSCS student with a deep love for creating exceptional web experiences. 
                My journey in web development combines technical expertise with creative problem-solving, 
                always striving to build applications that not only function flawlessly but also delight users.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community. I believe in continuous learning and staying 
                ahead of the curve in this ever-evolving field.
              </p>
            </div>
            <div className="skills">
              <h3>Technical Skills</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-icon">
                    <i className="fab fa-html5"></i>
                  </div>
                  <span className="skill-name">HTML5</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">
                    <i className="fab fa-css3-alt"></i>
                  </div>
                  <span className="skill-name">CSS3</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">
                    <i className="fab fa-js-square"></i>
                  </div>
                  <span className="skill-name">JavaScript</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">
                    <i className="fab fa-react"></i>
                  </div>
                  <span className="skill-name">React</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">
                    <i className="fab fa-bootstrap"></i>
                  </div>
                  <span className="skill-name">Bootstrap</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">
                    <i className="fab fa-node-js"></i>
                  </div>
                  <span className="skill-name">Node.js</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">
                    <i className="fab fa-git-alt"></i>
                  </div>
                  <span className="skill-name">Git</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">
                    <i className="fas fa-database"></i>
                  </div>
                  <span className="skill-name">MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">
            <span>Featured Projects</span>
            <div className="title-decoration"></div>
          </h2>
          <div className="projects-grid">


      {/* new prj pushing */}


<div className="project-card">
              <div className="project-image">
                <div className="project-overlay">
                  <div className="project-icons">
                    <i className="fas fa-user"></i>
                  </div>
                </div>
                <div className="project-badge">Employee Task Management System</div>
              </div>
              <div className="project-content">
                <h3>ManageUp</h3>
                <p>ManageUpis a React-based Employee Task Management System where admins create and assign tasks, and employees view, accept, and update them. Dashboards show task status—New, Active, Completed, Failed. Using localStorage, all data persists without a backend, making workflow fast, simple, and efficient.</p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Tailwind CSS</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">Responsive</span>
                </div>
                <div className="project-buttons">
                  <a href="https://manage-up.vercel.app/" className="btn-project" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                    <span>Live Demo</span>
                  </a>
                  <a href="https://github.com/eqan-gg/ManageUp" className="btn-project-secondary">
                    <i className="fab fa-github"></i>
                    <span>Source Code</span>
                  </a >
                </div>
              </div>
            </div>


            <div className="project-card">
              <div className="project-image">
                <div className="project-overlay">
                  <div className="project-icons">
                    <i className="fas fa-film"></i>
                  </div>
                </div>
                <div className="project-badge">React</div>
              </div>
              <div className="project-content">
                <h3>Movies Discovery App</h3>
                <p>A comprehensive movie discovery platform featuring advanced search, favorites management, and integrated video player for seamless entertainment.</p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Router</span>
                  <span className="tech-tag">CSS3</span>
                  <span className="tech-tag">API</span>
                </div>
                <div className="project-buttons">
                  <a href="https://movies-app-three-sand.vercel.app/" className="btn-project" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                    <span>Live Demo</span>
                  </a>
                  <a href="https://github.com/eqan-gg/movies-app" className="btn-project-secondary">
                    <i className="fab fa-github"></i>
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-overlay">
                  <div className="project-icons">
                    <i className="fas fa-brain"></i>
                  </div>
                </div>
                <div className="project-badge">Landing Page</div>
              </div>
              <div className="project-content">
                <h3>NexusAI Platform</h3>
                <p>An innovative AI productivity platform landing page showcasing modern design principles, smooth animations, and interactive user experience.</p>
                <div className="project-tech">
                  <span className="tech-tag">HTML5</span>
                  <span className="tech-tag">CSS3</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">Responsive</span>
                </div>
                <div className="project-buttons">
                  <a href="https://nexusai-landing-page.vercel.app/" className="btn-project" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                    <span>Live Demo</span>
                  </a>
                  <a href="https://github.com/eqan-gg/nexusai-landing-page" className="btn-project-secondary">
                    <i className="fab fa-github"></i>
                    <span>Source Code</span>
                  </a >
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-overlay">
                  <div className="project-icons">
                    <i className="fas fa-user-circle"></i>
                  </div>
                </div>
                <div className="project-badge">Portfolio</div>
              </div>
              <div className="project-content">
                <h3>Personal Portfolio</h3>
                <p>A modern, responsive portfolio website featuring smooth animations, interactive elements, and a clean, professional design that showcases my work.</p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">CSS3</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">Animations</span>
                </div>
                <div className="project-buttons">
                  <button className="btn-project current">
                    <i className="fas fa-check-circle"></i>
                    <span>Current Project</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">
            <span>Let's Work Together</span>
            <div className="title-decoration"></div>
          </h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-intro">
                <h3>Ready to bring your ideas to life?</h3>
                <p>
                  I'm always excited to work on new projects and collaborate with amazing people. 
                  Whether you have a specific project in mind or just want to chat about web development, 
                  I'd love to hear from you!
                </p>
              </div>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">Email</span>
                    <span className="contact-value">eqanchauhaan@gmail.com</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">Location</span>
                    <span className="contact-value">Available Worldwide</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">Response Time</span>
                    <span className="contact-value">Within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form className="form-container">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your full name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="your.email@example.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="What's this about?" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" placeholder="Tell me about your project or idea..." rows="5" required></textarea>
                </div>
                <button type="submit" className="btn-submit">
                  <span>Send Message</span>
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Eqan Chauhan</h3>
              <p>Frontend Developer & Digital Creator</p>
            </div>
            <div className="footer-links">
              <div className="footer-section">
                <h4>Quick Links</h4>
                <a href="#about" onClick={() => scrollToSection('about')}>About</a>
                <a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
                <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
              </div>
              <div className="footer-section">
                <h4>Connect</h4>
                <a href="https://github.com/eqan-gg" className="social-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                  GitHub
                </a>
                <a href="https://linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                  LinkedIn
                </a>
                <a href="https://twitter.com" className="social-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Eqan Chauhan. Crafted with passion and precision.</p>
            <div className="footer-decoration"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

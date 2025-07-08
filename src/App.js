import logo from './logo.svg';
import './App.css';
import profile from './profile.jpg';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
      <img src={profile} alt="Profile" className="profile-image" />
        <h1>Eqan Chauhan</h1>
        <p>Web Developer</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I'm a BSCS student passionate about web development. I enjoy building responsive websites using HTML, CSS, JavaScript, and React.
        </p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Portfolio Website</h3>
          <p>A personal portfolio built with React and custom CSS.</p>
        </div>
        <div className="project">
          <h3>Todo App</h3>
          <p>Simple task manager with add/delete features and local storage support.</p>
    <a href="https://todolist-app-psi-smoky.vercel.app" target="_blank" rel="noopener noreferrer">
  <button style={{
    padding: '10px 20px',
    backgroundColor: '#2a2a3d',
    color: '#64b5f6',
    border: '1px solid #3a3a5c',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px'
  }}>
    View ToDo App
  </button>
</a>


        </div>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Email: eqanchauhaan@gmail.com</p>
      </section>

      
    </div>
  );
}

export default App;


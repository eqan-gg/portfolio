import logo from './logo.svg';
import './App.css';

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
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
    <a href="https://todolist-app-psi-smoky.vercel.app" target="_blank">
  <button>View ToDo App</button>
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


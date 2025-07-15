import logo from './logo.svg';
import './App.css';
import profile from './profile.jpeg';
import React from 'react';

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
            <button style={buttonStyle}>View ToDo App</button>
          </a>
        </div>

        {/* === New Movie App Project === */}
        <div className="project">
          <h3>Movie Streaming UI Clone</h3>
          <p>
            A React-based movie UI where users can search, view, and favorite movies.
            Includes routing, real-time search, and responsive design.
          </p>
          <ul style={{ paddingLeft: '20px' }}>
            <li>Search movies in real time</li>
            <li>Add/remove favorites via heart icon</li>
            <li>Separate Favorites page with routing</li>
            <li>Fully responsive & clean layout using custom CSS</li>
          </ul>
          <a href="https://movies-app-three-sand.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button style={buttonStyle}>View Movie App</button>
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

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#2a2a3d',
  color: '#64b5f6',
  border: '1px solid #3a3a5c',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '16px',
  marginTop: '10px'
};

export default App;

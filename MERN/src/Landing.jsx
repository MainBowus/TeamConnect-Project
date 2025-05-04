import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/landing.css';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <nav className="navbar">
        <div className="logo">SYNERLEARN</div>
        <ul className="nav-links">
          <li>ABOUT</li>
          <li>NEWS</li>
          <li>SERVICES</li>
        </ul>
      </nav>

      <main className="landing-main">
        <div className="headline-section">
          <h1>Connecting passionate learners</h1>
          <h2>Through skill sharing & collaboration</h2>
          <p>
            Synerlearn is a platform where you can meet like-minded people,
            exchange knowledge, and grow your skills in a creative, connected environment.
          </p>
          <div className="landing-buttons">
            <button className="primary-btn" onClick={() => navigate('/register')}>Get Started</button>
            <button className="secondary-btn" onClick={() => navigate('/skills')}>ดูทักษะทั้งหมด</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/public/children.jpg" alt="Learning Together" />
        </div>
      </main>
    </div>
  );
};

export default Landing;

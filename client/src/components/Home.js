import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Ensure this points to the correct CSS file
import Navbar from './Navbar/Navbar'
import MyParticles from './Particles/Particles';
import About from './About';
import { useAuth } from './context/AuthContext';

const Home = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [greeting, setGreeting] = useState('');
  const { isLoggedIn } = useAuth();
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    setShowTitle(true);
    const hour = new Date().getHours();
    const newGreeting = hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening';
    setGreeting(newGreeting);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      setShowWelcome(true);
      setTimeout(() => setShowWelcome(false), 5000); // Hide the pop-up after 5 seconds
    }
  }, [isLoggedIn]);

  return (
    <div className="home">
      <Navbar/>
      <MyParticles />
      <div className="content">
        <div className='start-home'>
        <h1 className={`title-heading ${showTitle ? 'show' : ''}`}>
          {greeting}, Welcome to Our Hackathon Management System
        </h1>
        <p className="description">
         Join our internal hackathon to innovate, collaborate, and bring creative solutions to life alongside colleagues. Your ideas matter. Let's build something amazing together.
        </p>

        {/* Conditional rendering for the button */}
        {isLoggedIn ? (
          <Link className="button highlight-button" to="/register">
            Submit Your Idea Now
          </Link>
        ) : (
          <Link className="button highlight-button" to="/auth">
            Submit Your Idea Now
          </Link>
        )}
        </div>
        <About/>
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Ensure this points to the correct CSS file
import Navbar from './Navbar/Navbar';
import MyParticles from './Particles/Particles';
import PrizeSection from './PrizeSection';

const Home = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    setShowTitle(true);
    // Dynamic greeting based on the time of day
    const hour = new Date().getHours();
    const newGreeting = hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening';
    setGreeting(newGreeting);
  }, []);

  return (
    <div className="home">
      <Navbar/>
      <MyParticles />
      <div className="content">
        <h1 className={`title-heading ${showTitle ? 'show' : ''}`}>
          {greeting}, Welcome to Our Hackathon Management System
        </h1>
        <p className="description">
         Join our internal hackathon to innovate, collaborate, and bring creative solutions to life alongside colleagues. Your ideas matter. Let's build something amazing together.
        </p>
        <Link className="button highlight-button" to="/auth">
          Submit Your Idea Now
        </Link>
        <PrizeSection/>
      </div>
    </div>
  );
};

export default Home;

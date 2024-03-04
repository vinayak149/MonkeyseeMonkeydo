import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import MyParticles from './Particles/Particles';
import Footer from './Footer/Footer';

const Home = () => {
  
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    setShowTitle(true);
  }, []);

  return (
    <div className="home">
      <MyParticles/>
      <div className="content">
        <h1 className={`title-heading ${showTitle ? 'show' : ''}`}>
          Welcome to the Hackathon Management System
        </h1>
        <Link className="button" to="/login">
          Submit Idea
        </Link>
      </div>
    </div>
  );
};

export default Home;

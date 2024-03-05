import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Navbar from './Navbar/Navbar';
import MyParticles from './Particles/Particles';

const Home = () => {
  
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    setShowTitle(true);
  }, []);

  return (
    <div className="home">
    <Navbar/><MyParticles /><div className="content">
        <h1 className={`title-heading ${showTitle ? 'show' : ''}`}>
          Welcome to the Hackathon Management System
        </h1>
        <div className="emoticons">
          <Link className="emoticon" to="/login1">
            😊
          </Link>
          <Link className="emoticon" to="/login2">
            😉
          </Link>
          <Link className="emoticon" to="/login3">
            😎
          </Link>
        </div>
        <Link className="button" to="/ideas/new">
          Submit a New Idea
        </Link>
      </div>
    </div>
  );
};

export default Home;

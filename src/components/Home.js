import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import ParticleBackground from './ParticleBackground';


const Home = () => {
  return (
    <div className="home">
      <ParticleBackground />
      <div className="content">
        <h1 className="title-heading">Welcome to the Hackathon Management System</h1>
        <Link className='button' to="/ideas/new">Submit a New Idea</Link>
      </div>
      <video autoPlay loop muted className="background-video video-overlay">
        <source src="videos/hack.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Home;

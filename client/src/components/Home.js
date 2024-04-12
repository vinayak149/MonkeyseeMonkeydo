// Home.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Ensure this points to the correct CSS file
import Navbar from './Navbar/Navbar';
import MyParticles from './Particles/Particles';
import About from './About';
import FAQCard from './FAQCard'; // Import FAQCard component
import { useAuth } from './context/AuthContext';
import { UserInfo } from '../utils/helper';
import aiImage from '../components/Images/ai.gif'; 
import cybersecurityImage from '../components/Images/cyber1.gif'; 
import digitalEngineeringImage from '../components/Images/dig.gif'; 
import operationsTransformationImage from '../components/Images/operation.gif'; 

const Home = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [greeting, setGreeting] = useState('');
  const { isLoggedIn } = useAuth();
  const [showWelcome, setShowWelcome] = useState(false);
  const userInfo = new UserInfo();

  useEffect(() => {
    setShowTitle(true);
    const hour = new Date().getHours();
    const newGreeting =
      hour < 12
        ? 'Good Morning'
        : hour < 18
        ? 'Good Afternoon'
        : 'Good Evening';
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
      <Navbar />
      <MyParticles />
      <div className="content">
        <div className="start-home">
          <h1 className={`title-heading ${showTitle ? 'show' : ''}`}>
            {greeting}, Welcome to Our Hackathon Management System
          </h1>
          <p className="description">
            Join our internal hackathon to innovate, collaborate, and bring
            creative solutions to life alongside colleagues. Your ideas matter.
            Let's build something amazing together.
          </p>

          {/* Conditional rendering for the button */}
          {userInfo.getRole() === 'PARTICIPANT' && isLoggedIn ? (
            <Link className="button highlight-button" to="/register">
              Submit Your Idea Now
            </Link>
          ) : null}
        </div>
        
        {/* Theme Section */}
        <div className="theme-section-container">
          <div className="theme-section">
            <h2>Explore Our Domains</h2>
            <div className="theme-list">
              <div className="theme">
                <h3>AI And Data</h3>
                <img src={aiImage} alt="AI And Data" className="theme-image" />
                <p>Artificial Intelligence (AI) and data are two interconnected domains at the forefront of technological innovation. .</p>
              </div>
              <div className="theme">
                <h3>Cybersecurity</h3>
                <img src={cybersecurityImage} alt="Cybersecurity" className="theme-image" />
                <p>Cybersecurity is the practice of protecting computer systems, networks, programs, and data from digital attacks.</p>
              </div>
              <div className="theme">
                <h3>Digital Engineering</h3>
                <img src={digitalEngineeringImage} alt="Digital Engineering" className="theme-image" />
                <p>Digital engineering is an approach to engineering that leverages digital technologies, processes, and methodologies.</p>
              </div>
              <div className="theme">
                <h3>Ops Transformation</h3>
                <img src={operationsTransformationImage} alt="Operations Transformation" className="theme-image" />
                <p>Operations transformation involves reimagining and redesigning an organization's operational processes, systems.</p>
              </div>
            </div>
          </div>
        </div>

        <About />
        
        {/* FAQ Section */}
        <div className="faq-section-container">
          <div className="faq-section">
            <h2>Frequently Asked Questions (FAQs)</h2>
            <p>
              Here You can find the previously asked questions about our hackathon.
              Feel free to connect us if you have any queries.
            </p>
            <div className="faq-cards">
              <FAQCard
                question="What is MonkeySeeMonkeyDo?"
                answer="MonkeySeeMonkeyDo is a software hackathon on four major domains i.e. AI And Data, Cybersecurity, Digital Engineering and Operations Transformation, that encourages students from technical fields to come forward with solutions to every day tech problems."
              />
              <FAQCard
                question="I can’t register my team members it asks me to login/register what to do?"
                answer="Before registering your team members first make sure that you yourself are registered first, and if you’re registered then make sure that you login with the same mail-id and password that you used earlier."
              />
              <FAQCard
                question="Can I change my team members/problem statement?"
                answer="Yes, for a certain period of time changing of team members or problem statement is allowed but once submitted we do not allow further changes."
              />
              <FAQCard
                question="Why should you join this Hackathon?"
                answer="It will help you in logic building , it will give you a quite knowledge how community work and you will be able to manage team."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

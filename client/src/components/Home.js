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
        <About />

        {/* FAQ Section */}
        <div className="faq-section-container">
          <div className="faq-section">
            <h2>Facing problems? Find your answer</h2>
            <p>
              Here You can find the previously asked questions about our hackathon.
              Feel free to connect us if you have any queries.
            </p>
            <div className="faq-cards">
              <FAQCard
                question="What is MonkeySeeMonkeyDo?"
                answer="MonkeySeeMonkeyDo is..."
              />
              <FAQCard
                question="I can’t register my team members it asks me to login/register what to do?"
                answer="If you can't register your team members..."
              />
              <FAQCard
                question="Can I change my team members/problem statement?"
                answer="Yes, you can change your team members or problem statement..."
              />
              <FAQCard
                question="Why should you join this Hackathon?"
                answer="You should join this hackathon because..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

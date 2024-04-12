import React from 'react';
import './prize.css';
import Navbar2 from './Navbar/Navbar2'

const WinningSection = () => {
  return (
    <div><Navbar2/>
    <div className="winning-section">
      <div className="bar second">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h2>Second Place</h2>
              <p>Well done!</p>
              <img src="https://cdn.pixabay.com/photo/2017/03/21/21/05/medal-2163349_1280.png" alt="Second Place Image" />
            </div>
            <div className="flip-card-back">
              <h3>Second Place Details</h3>
              <p>Details about second place team</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bar first">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h2>First Place</h2>
              <p>Congratulations to the winner!</p>
              <img src="https://cdn.pixabay.com/photo/2017/03/21/21/05/medal-2163347_1280.png" alt="First Place Image" />
            </div>
            <div className="flip-card-back">
              <h3>First Place Details</h3>
              <p>Details about first place team</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bar third">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h2>Third Place</h2>
              <p>Great job!</p>
              <img src="https://cdn.pixabay.com/photo/2017/03/21/21/06/medal-2163351_1280.png" alt="Third Place Image" />
            </div>
            <div className="flip-card-back">
              <h3>Third Place Details</h3>
              <p>Details about third place team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WinningSection;

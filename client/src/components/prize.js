import React from 'react';
import './prize.css';

const WinningSection = () => {
  return (
    <div className="winning-section">
      <div className="bar second">
        <h2>Second Place</h2>
        <p>Well done!</p>
        <img src="https://cdn.pixabay.com/photo/2017/03/21/21/05/medal-2163349_1280.png" alt="Second Place Image" />
      </div>
      <div className="bar first">
        <h2>First Place</h2>
        <p>Congratulations to the winner!</p>
        <img src="https://cdn.pixabay.com/photo/2017/03/21/21/05/medal-2163347_1280.png" alt="First Place Image" />
      </div>
      <div className="bar third">
        <h2>Third Place</h2>
        <p>Great job!</p>
        <img src="https://cdn.pixabay.com/photo/2017/03/21/21/06/medal-2163351_1280.png" alt="Third Place Image" />
      </div>
    </div>
  );
};

export default WinningSection;

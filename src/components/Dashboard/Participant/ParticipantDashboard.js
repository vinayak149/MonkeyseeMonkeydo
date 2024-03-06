// import React, { useState } from 'react';
// import './ParticipantDashboard.css'; // Make sure to create a corresponding CSS file
// import RecentActivitySection from './RecentActivitySession';

// // Header component
// const Header = ({ title }) => (
//   <div className="header">
//     <h1>{title}</h1>
//     {/* Add more header content */}
//   </div>
// );

// // Card component
// const Card = ({ title, value, additionalInfo }) => {
//   const [isClicked, setIsClicked] = useState(true);

//   const handleClick = () => {
//     setIsClicked(!isClicked);
//   };

//   return (
//     <div
//       className={`card ${isClicked ? 'clicked' : ''}`}
//       onClick={handleClick}
//     >
//       <h2>{title}</h2>
//       <p>{value}</p>
//       <small>{additionalInfo}</small>
//     </div>
//   );
// };

// // Circular progress component (dummy - actual implementation would require SVG or a library)
// const CircularProgress = ({ percentage }) => (
//   <div className="circular-progress">
//     {percentage}%
//   </div>
// );

// // Dashboard component
// const ParticipantDashboard = () => (
//   <div className="dashboard">
//     <div className="main-content">
//       <Header title="Dashboard" />
//       <div className="cards">
//         <Card
//           title="Total tasks"
//           value="100"
//           additionalInfo="+20 added this week"
//         />
//         <Card
//           title="Total Candidate"
//           value="500"
//           additionalInfo="+30 added this week"
//         />
//         <Card
//           title="5:30"
//           value="Avg.Time"
//           additionalInfo="+0.20s added this week"
//         />
//         <Card
//           title="Total tasks"
//           value="100"
//           additionalInfo="+20 added this week"
//         />
//       </div>
//       <CircularProgress percentage={2} />
//       {/* Add more components as needed */}
//       <RecentActivitySection />
//     </div>
//   </div>
// );

// export default ParticipantDashboard;

import React, { useState, useEffect } from 'react';
import './ParticipantDashboard.css'; // Ensure this CSS file is updated with the styles provided later
// Assuming RecentActivitySection is correctly implemented elsewhere
import RecentActivitySection from './RecentActivitySession';
// import CircularProgress from 'react-circular-progressbar';
import { CircularProgressbar as CircularProgress } from 'react-circular-progressbar';


// Simulated fetch function for demonstration purposes
const fetchData = async () => {
  // Replace this with actual API call
  return {
    cards: [
      { title: "Total tasks", value: "120", additionalInfo: "+20 added this week" },
      { title: "Total Candidates", value: "500", additionalInfo: "+30 added this week" },
      { title: "Average Time", value: "5:30", additionalInfo: "+0.20s added this week" }
    ],
    progress: 75, // Example progress value
  };
};

const Header = ({ title }) => (
  <div className="header">
    <h1>{title}</h1>
  </div>
);

const Card = ({ title, value, additionalInfo }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={`card ${isClicked ? 'clicked' : ''}`} onClick={handleClick}>
      <h2>{title}</h2>
      <p>{value}</p>
      <small>{additionalInfo}</small>
    </div>
  );
};

const ParticipantDashboard = () => {
  const [cardsData, setCardsData] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    fetchData().then(data => {
      setCardsData(data.cards);
      setProgress(data.progress);
    });
  }, []);

  return (
    <div className="dashboard">
      <Header title="Dashboard" />
      <div className="cards">
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} value={card.value} additionalInfo={card.additionalInfo} />
        ))}
      </div>
      <div style={{width: 100, height: 100}}>
        <CircularProgress value={progress} text={`${progress}%`} />
      </div>
      <RecentActivitySection />
    </div>
  );
};

export default ParticipantDashboard;

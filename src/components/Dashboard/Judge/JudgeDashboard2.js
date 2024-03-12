import React, { useState, useEffect } from "react";
import "./JudgeDashboard2.css"; // Ensure you have corresponding JudgeDashboard CSS
import Timer from "../Participant/Timer";
import AnimatedNumber from "../Participant/AnimatedNumber";
import Navbar2 from "../../Navbar/Navbar2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome if you use it for icons
import { faDownload } from '@fortawesome/free-solid-svg-icons'; // Example icon for download

const JudgeDashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    totalProjects: 0,
    judgingTimeRemaining: "",
    currentProject: {
      name: "",
      description: "",
      files: [], // Assuming an array of file info like { name: "file.pdf", url: "/path/to/file.pdf" }
      score: {
        userInterface: 0,
        qualityOfCode: 0,
        workflow: 0,
        // Add other scoring criteria here
      }
    },
  });

  const [currentScore, setCurrentScore] = useState({
    UserInterface: 1,
    QualityOfCode: 1,
    Workflow: 1,
    // Initialize with the rest of the criteria
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      // Fetch data relevant to judges
    };

    fetchDashboardData();
  }, []);

  const handleScoreChange = (criteria, value) => {
    setCurrentScore({ ...currentScore, [criteria]: value });
  };

  const submitScores = () => {
    // API call to submit the scores
  };

  return (
    <div>
      <Navbar2 />
      <div className="judge-dashboard">
        <div className="container">
          {/* Left side: Project Details */}
          <div className="project-info">
            <div className="project-details">
              <h2>Team Name</h2>
              <p>{dashboardData.currentProject.name}</p>
              <h2>Project Description</h2>
              <p>{dashboardData.currentProject.description}</p>
            </div>
            <div className="project-files">
              <h2>Project Files</h2>
              {dashboardData.currentProject.files.map((file, index) => (
                <div key={index} className="file-link">
                  <FontAwesomeIcon icon={faDownload} /> <a href={file.url} download>{file.name}</a>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right side: Scoring Section */}
          <div className="scoring">
            <h2>Judgement Parameters</h2>
            {/* Score Sliders */}
            {Object.keys(currentScore).map((criteria) => (
              <div key={criteria} className="score-slider">
                <label>{criteria}:</label>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={currentScore[criteria]}
                  onChange={(e) => handleScoreChange(criteria, e.target.value)}
                />
                <AnimatedNumber number={currentScore[criteria]} />
              </div>
            ))}
            <button onClick={submitScores}>Submit Scores</button>
          </div>
        </div>
        <div className="navigation-buttons">
          <button className="prev-button">Previous</button>
          <button className="next-button">Next</button>
        </div>
      </div> 
    </div> 
  );
};

export default JudgeDashboard;
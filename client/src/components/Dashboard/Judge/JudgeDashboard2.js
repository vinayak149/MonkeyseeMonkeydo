// import React, { useState, useEffect } from "react";
// import "./JudgeDashboard2.css"; // Make sure this matches your CSS file's name
// import Timer from "../Participant/Timer";
// import AnimatedNumber from "../Participant/AnimatedNumber";
// import Navbar2 from "../../Navbar/Navbar2";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faDownload } from '@fortawesome/free-solid-svg-icons';

// const JudgeDashboard = () => {
//   const [dashboardData, setDashboardData] = useState({
//     totalProjects: 0,
//     judgingTimeRemaining: "",
//     currentProject: {
//       name: "",
//       description: "",
//       files: [],
//       score: {
//         userInterface: 0,
//         qualityOfCode: 0,
//         workflow: 0,
//       }
//     },
//   });

//   const [currentScore, setCurrentScore] = useState({
//     UserInterface: 1,
//     QualityOfCode: 1,
//     Workflow: 1,
//   });

//   const [feedback, setFeedback] = useState("");
//   const maxWords = 200;

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       // Fetch data relevant to judges
//     };

//     fetchDashboardData();
//   }, []);

//   const handleScoreChange = (criteria, value) => {
//     setCurrentScore({ ...currentScore, [criteria]: value });
//   };

//   const handleFeedbackChange = (e) => {
//     const enteredText = e.target.value;
//     const wordCount = enteredText.split(/\s+/).filter(n => n !== "").length;
//     if (wordCount <= maxWords) {
//       setFeedback(enteredText);
//     } else {
//       const trimmedText = enteredText.split(/\s+/).slice(0, maxWords).join(" ");
//       setFeedback(trimmedText);
//     }
//   };

//   const wordsLeft = maxWords - feedback.trim().split(/\s+/).filter(n => n !== "").length;

//   const submitScores = () => {
//     // API call to submit the scores
//   };

//   return (
//     <div>
//       <Navbar2 />
//       <div className="judge-dashboard">
//         <div className="judge-container">
//           <div className="project-info">
//             <div className="project-details">
//               <h2>Team Name</h2>
//               <p>{dashboardData.currentProject.name}</p>
//               <h2>Project Description</h2>
//               <p>{dashboardData.currentProject.description}</p>
//             </div>
//             <div className="project-files">
//               <h2>Project Files</h2>
//               {dashboardData.currentProject.files.map((file, index) => (
//                 <div key={index} className="file-link">
//                   <FontAwesomeIcon icon={faDownload} /> <a href={file.url} download>{file.name}</a>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="scoring">
//             <h2>Judgement Parameters</h2>
//             {Object.keys(currentScore).map((criteria) => (
//               <div key={criteria} className="score-slider">
//                 <label>{criteria}:</label>
//                 <input
//                   type="range"
//                   min="0"
//                   max="10"
//                   value={currentScore[criteria]}
//                   onChange={(e) => handleScoreChange(criteria, e.target.value)}
//                 />
//                 <AnimatedNumber number={currentScore[criteria]} />
//               </div>
//             ))}
//             <h2 style={{ marginBottom: "10px" }}>Feedback:</h2>
//             <div className="feedback-form">
//               <textarea
//                 placeholder="Enter your feedback here (max 200 words)..."
//                 value={feedback}
//                 onChange={handleFeedbackChange}
//               />
//               <div className="word-count">
//                 {wordsLeft >= 0 ? wordsLeft : 0} words left
//               </div>
//             </div>
//             <button onClick={submitScores}>Submit Scores</button>
//           </div>
//         </div>
//         <div className="navigation-buttons">
//           <button className="prev-button">Previous</button>
//           <button className="next-button">Next</button>
//         </div>
//       </div> 
//     </div> 
//   );
// };

// export default JudgeDashboard;
import React, { useState } from "react";
import "./JudgeDashboard2.css";
import Navbar2 from "../../Navbar/Navbar2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const JudgeDashboard2 = ({ selectedTeam }) => {
  const [currentScore, setCurrentScore] = useState({
    UserInterface: 1,
    QualityOfCode: 1,
    Workflow: 1,
  });
  const [feedback, setFeedback] = useState("");
  const maxWords = 200;

  const handleScoreChange = (criteria, value) => {
    setCurrentScore({ ...currentScore, [criteria]: value });
  };

  const handleFeedbackChange = (e) => {
    const enteredText = e.target.value;
    const wordCount = enteredText.split(/\s+/).filter(n => n !== "").length;
    if (wordCount <= maxWords) {
      setFeedback(enteredText);
    } else {
      const trimmedText = enteredText.split(/\s+/).slice(0, maxWords).join(" ");
      setFeedback(trimmedText);
    }
  };

  const wordsLeft = maxWords - feedback.trim().split(/\s+/).filter(n => n !== "").length;

  const submitScores = () => {
    // API call to submit the scores
  };

  return (
    <div>
      <Navbar2 />
      <div className="judge-dashboard">
        <div className="judge-container">
          <div className="project-info">
            <div className="project-details">
              <h2>Team Name</h2>
              <p>{selectedTeam.teamName}</p>
              <h2>Project Description</h2>
              <p>{selectedTeam.idea ? selectedTeam.idea.description : ""}</p>
            </div>
            <div className="project-files">
              <h2>Project Files</h2>
              {selectedTeam.idea && selectedTeam.idea.files && selectedTeam.idea.files.map((file, index) => (
                <div key={index} className="file-link">
                  <FontAwesomeIcon icon={faDownload} /> <a href={file.url} download>{file.name}</a>
                </div>
              ))}
            </div>
          </div>
          <div className="scoring">
            <h2>Judgement Parameters</h2>
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
                {currentScore[criteria]}
              </div>
            ))}
            <h2 style={{ marginBottom: "10px" }}>Feedback:</h2>
            <div className="feedback-form">
              <textarea
                placeholder="Enter your feedback here (max 200 words)..."
                value={feedback}
                onChange={handleFeedbackChange}
              />
              <div className="word-count">
                {wordsLeft >= 0 ? wordsLeft : 0} words left
              </div>
            </div>
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

export default JudgeDashboard2;
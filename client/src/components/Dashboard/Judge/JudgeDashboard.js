// // import React, { useState, useEffect } from "react";
// // import "./JudgeDashboard.css";
// // import Navbar2 from "../../Navbar/Navbar2";
// // import axios from "axios";
// // import JudgeDashboard2 from "./JudgeDashboard2";

// // function JudgeDashboard() {
// //   const [teams, setTeams] = useState([]);
// //   const [selectedTeam, setSelectedTeam] = useState(null);

// //   useEffect(() => {
// //     const fetchTeams = async () => {
// //       try {
// //         const response = await axios.get("http://localhost:8080/teams/all");
// //         setTeams(response.data);
// //       } catch (error) {
// //         console.error("Failed to fetch teams:", error);
// //       }
// //     };

// //     fetchTeams();
// //   }, []);

// //   const handleReview = (team) => {
// //     setSelectedTeam(team);
// //   };

// //   if (selectedTeam) {
// //     return (
// //       <JudgeDashboard2 selectedTeam={selectedTeam} />
// //     );
// //   } else {
// //     return (
// //       <div style={{ backgroundColor: "#040720" }}>
// //         <Navbar2 />
// //         <div className="Box">
// //           <div style={{ backgroundColor: "Black" }} className="Heading">
// //             <h1>Judge Dashboard</h1>
// //           </div>
// //           <div className="TotalCandidates">
// //             <h2>Total Candidates</h2>
// //             <p>
// //               Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
// //               commodo ligula eget dolor. Aenean massa. Cum sociis natoque
// //             </p>
// //           </div>
// //         </div>
// //         <table className="customTable">
// //           <thead>
// //             <tr>
// //               <th>Team Name</th>
// //               <th>Team ID</th>
// //               <th>Problem Description</th>
// //               <th>Action</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {teams.map((team) => (
// //               <tr key={team.id}>
// //                 <td>{team.teamName}</td>
// //                 <td>{team.id}</td>
// //                 <td>{team.idea ? team.idea.description : ""}</td>
// //                 <td>
// //                   <button onClick={() => handleReview(team)}>Review</button>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //         <div className="content-above-footer">
// //           <h2>Ready to submit your final decision?</h2>
// //           <p>Review all the projects carefully before finalizing your scores.</p>
// //         </div>
// //       </div>
// //     );
// //   }
// // }

// // export default JudgeDashboard;
// import React, { useState, useEffect } from "react";
// import "./JudgeDashboard.css";
// import Navbar2 from "../../Navbar/Navbar2";
// import axios from "axios";
// import JudgeDashboard2 from "./JudgeDashboard2";

// function JudgeDashboard() {
//   const [teams, setTeams] = useState([]);
//   const [selectedTeamIndex, setSelectedTeamIndex] = useState(null);

//   useEffect(() => {
//     const fetchTeams = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/teams/all");
//         setTeams(response.data);
//         // Set the selected team index to the first team by default
//         setSelectedTeamIndex(0);
//       } catch (error) {
//         console.error("Failed to fetch teams:", error);
//       }
//     };

//     fetchTeams();
//   }, []);

//   const handleReview = (teamIndex) => {
//     setSelectedTeamIndex(teamIndex);
//   };

//   const handlePrev = () => {
//     setSelectedTeamIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
//   };

//   const handleNext = () => {
//     setSelectedTeamIndex((prevIndex) => (prevIndex < teams.length - 1 ? prevIndex + 1 : prevIndex));
//   };

//   return (
//     <div style={{ backgroundColor: "#040720" }}>
//       <Navbar2 />
//       <div className="Box">
//         <div style={{ backgroundColor: "Black" }} className="Heading">
//           <h1>Judge Dashboard</h1>
//         </div>
//         <div className="TotalCandidates">
//           <h2>Total Candidates</h2>
//           <p>
//             Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
//             commodo ligula eget dolor. Aenean massa. Cum sociis natoque
//           </p>
//         </div>
//       </div>
//       {selectedTeamIndex !== null && (
//         <JudgeDashboard2 selectedTeam={teams[selectedTeamIndex]} />
//       )}
//       <table className="customTable">
//         <thead>
//           <tr>
//             <th>Team Name</th>
//             <th>Team ID</th>
//             <th>Problem Description</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {teams.map((team, index) => (
//             <tr key={team.id}>
//               <td>{team.teamName}</td>
//               <td>{team.id}</td>
//               <td>{team.idea ? team.idea.description : ""}</td>
//               <td>
//                 <button onClick={() => handleReview(index)}>Review</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="content-above-footer">
//         <h2>Ready to submit your final decision?</h2>
//         <p>Review all the projects carefully before finalizing your scores.</p>
//       </div>
//       <div className="navigation-buttons">
//         <button className="prev-button" onClick={handlePrev}>Previous</button>
//         <button className="next-button" onClick={handleNext}>Next</button>
//       </div>
//     </div>
//   );
// }

// export default JudgeDashboard;


// // JudgeDashboard.js
// import React, { useState, useEffect } from "react";
// import "./JudgeDashboard.css";
// import Navbar2 from "../../Navbar/Navbar2";
// import JudgeDashboard2 from "./JudgeDashboard2";
// import axios from "axios";

// function JudgeDashboard() {
//   const [teams, setTeams] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const fetchTeams = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/teams/all");
//         setTeams(response.data);
//       } catch (error) {
//         console.error("Failed to fetch teams:", error);
//       }
//     };

//     fetchTeams();
//   }, []);

//   const handleNext = () => {
//     if (currentIndex < teams.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   return (
//     <div style={{ backgroundColor: "#040720" }}>
//       <Navbar2 />
//       <div className="Box">
//         <div style={{ backgroundColor: "Black" }} className="Heading">
//           <h1>Judge Dashboard</h1>
//         </div>
//         <div className="TotalCandidates">
//           <h2>Total Candidates</h2>
//           <p>
//             Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
//             commodo ligula eget dolor. Aenean massa. Cum sociis natoque
//           </p>
//         </div>
//       </div>
//       {teams.length > 0 ? (
//         <JudgeDashboard2 teams={teams} currentIndex={currentIndex} handleNext={handleNext} handlePrev={handlePrev} />
//       ) : (
//         <div>Loading...</div>
//       )}
//     </div>
//   );
// }

// export default JudgeDashboard;

// JudgeDashboard.js
import React, { useState, useEffect } from "react";
import "./JudgeDashboard.css";
import Navbar2 from "../../Navbar/Navbar2";
import JudgeDashboard2 from "./JudgeDashboard2";
import axios from "axios";
import { TeamService } from "../../../service/team.service";

function JudgeDashboard() {
  const [teams, setTeams] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const data = await TeamService().getAllTeams()
        setTeams(data);
      } catch (error) {
        console.error("Failed to fetch teams:", error);
      }
    };

    fetchTeams();
  }, []);

  const handleNext = () => {
    if (currentIndex < teams.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div style={{ backgroundColor: "#040720" }}>
      <Navbar2 />
      <div className="Box">
        <div style={{ backgroundColor: "Black" }} className="Heading">
          <h1>Judge Dashboard</h1>
        </div>
        <div className="TotalCandidates">
          <h2>Total Teams</h2>
          <p>
            {teams.length}
          </p>
        </div>
      </div>
      {teams.length > 0 && (
        <JudgeDashboard2 teams={teams} currentIndex={currentIndex} handleNext={handleNext} handlePrev={handlePrev} />
      )}
    </div>
  );
}

export default JudgeDashboard;

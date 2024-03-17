// import React, { useState, useEffect } from "react";
// import "./JudgeDashboard.css";
// import Navbar2 from "../../Navbar/Navbar2";
// import axios from "axios";

// function JudgeDashboard() {
//   const [teams, setTeams] = useState([]);

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

//   const handleStatusChange = (teamId, newStatus) => {
//     axios
//       .post(`YOUR_BACKEND_ENDPOINT/${teamId}/updateStatus`, { newStatus })
//       .then((response) => {
//         const updatedTeams = teams.map((team) =>
//           team.id === teamId ? response.data : team
//         );
//         setTeams(updatedTeams);
//       })
//       .catch((error) => console.error("Failed to update status:", error));
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
//       <table className="customTable">
//         <thead>
//           <tr>
//             <th>Team Name</th>
//             <th>Team ID</th>
//             <th>Problem Description</th>
//             <th>Review</th>
//           </tr>
//         </thead>
//         <tbody>
//           {teams.map((team) => (
//             <tr key={team.id}>
//               <td>{team.teamName}</td>
//               <td>{team.id}</td>
//               <td>{team.idea ? team.idea.description : ""}</td>
//               <td>
//                 <button onClick={() => handleStatusChange(team.id, "Review")}>
//                   Review
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="content-above-footer">
//         <h2>Ready to submit your final decision?</h2>
//         <p>Review all the projects carefully before finalizing your scores.</p>
//       </div>
//     </div>
//   );
// }

// export default JudgeDashboard;

import React, { useState, useEffect } from "react";
import "./JudgeDashboard.css";
import Navbar2 from "../../Navbar/Navbar2";
import axios from "axios";
import JudgeDashboard2 from "./JudgeDashboard2";

function JudgeDashboard() {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get("http://localhost:8080/teams/all");
        setTeams(response.data);
      } catch (error) {
        console.error("Failed to fetch teams:", error);
      }
    };

    fetchTeams();
  }, []);

  const handleReview = (team) => {
    setSelectedTeam(team);
  };

  if (selectedTeam) {
    return (
      <JudgeDashboard2 selectedTeam={selectedTeam} />
    );
  } else {
    return (
      <div style={{ backgroundColor: "#040720" }}>
        <Navbar2 />
        <div className="Box">
          <div style={{ backgroundColor: "Black" }} className="Heading">
            <h1>Judge Dashboard</h1>
          </div>
          <div className="TotalCandidates">
            <h2>Total Candidates</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            </p>
          </div>
        </div>
        <table className="customTable">
          <thead>
            <tr>
              <th>Team Name</th>
              <th>Team ID</th>
              <th>Problem Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team) => (
              <tr key={team.id}>
                <td>{team.teamName}</td>
                <td>{team.id}</td>
                <td>{team.idea ? team.idea.description : ""}</td>
                <td>
                  <button onClick={() => handleReview(team)}>Review</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="content-above-footer">
          <h2>Ready to submit your final decision?</h2>
          <p>Review all the projects carefully before finalizing your scores.</p>
        </div>
      </div>
    );
  }
}

export default JudgeDashboard;

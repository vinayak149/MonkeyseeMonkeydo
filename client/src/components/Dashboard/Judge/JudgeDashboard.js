// import React, { useState, useEffect } from "react";
// import "./JudgeDashboard.css";
// // import Timer from "../Participant/Timer";
// import Navbar2 from "../../Navbar/Navbar2";
// import axios from "axios";

// // import MyParticles from '../../Particles/Particles';
// // import CircularProgress from '@mui/joy/CircularProgress';

//   // Note: No need for a second useEffect with an empty dependency array as shown in your initial code
//   function JudgeDashboard (){
//         const [teams, setTeams] = useState([]);
      
//         // Fetch teams from the backend
//         useEffect(() => {
//           const fetchTeams = async () => {
//             try {
//               const response = await axios.get('http://localhost:8080/teams/all');
//               setTeams(response.data); // Assuming the data is in the response's data property
//             } catch (error) {
//               console.error('Failed to fetch teams:', error);
//             }
//           };
      
//           fetchTeams();
//         }, []);
      
//         // Function to handle approve/disapprove actions
//         const handleStatusChange = (teamId, newStatus) => {
//           // Call to backend to update the team's status
//           axios.post(`YOUR_BACKEND_ENDPOINT/${teamId}/updateStatus`, { newStatus })
//             .then(response => {
//               // Assuming the backend returns the updated team object
//               const updatedTeams = teams.map(team => team.teamId === teamId ? response.data : team);
//               setTeams(updatedTeams);
//             })
//             .catch(error => console.error('Failed to update status:', error));
//         };
//   return (
//     <div style={{ backgroundColor: "#040720" }}>
//       {/* <MyParticles/> */}
//       <Navbar2 />
//         <div className="Box">
//             <div style={{backgroundColor: "Black"}} className="Heading">
//                 <h1>Judge Dashboard</h1>
//             </div>
//             <div className="TotalCandidates">
//                 <h2>Total Candidates</h2>
//                     <p>
//                         Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
//                         commodo ligula eget dolor. Aenean massa. Cum sociis natoque
//                     </p>
//             </div>
//         </div>
//         <table className="customTable">
//         <thead>
//         <tr>
//           <th>Team Name</th>
//           <th>Team ID</th>
//           <th>Project Description</th>
//           <th>Review</th>
//         </tr>
//       </thead>
//       <tbody>
//         {teams.map(team => (
//           <tr key={team.teamId}>
//             <td>{team.teamName}</td>
//             <td>{team.teamId}</td>
//             <td>{team.status}</td>
//             <td>
//               <button onClick={() => handleStatusChange(team.teamId, 'Approved')}>Approve</button>
//               <button onClick={() => handleStatusChange(team.teamId, 'Disapproved')}>Disapprove</button>
//               <button onClick={() => handleStatusChange(team.teamId, 'Review')}>Review</button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//     <div className="content-above-footer">
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

function JudgeDashboard() {
  const [teams, setTeams] = useState([]);

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

  const handleStatusChange = (teamId, newStatus) => {
    axios
      .post(`YOUR_BACKEND_ENDPOINT/${teamId}/updateStatus`, { newStatus })
      .then((response) => {
        const updatedTeams = teams.map((team) =>
          team.id === teamId ? response.data : team
        );
        setTeams(updatedTeams);
      })
      .catch((error) => console.error("Failed to update status:", error));
  };

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
            <th>Review</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.id}>
              <td>{team.teamName}</td>
              <td>{team.id}</td>
              <td>{team.idea ? team.idea.description : ""}</td>
              <td>
                {/* <button onClick={() => handleStatusChange(team.id, "Disapproved")}>
                  Disapprove
                </button> */}
                <button onClick={() => handleStatusChange(team.id, "Review")}>
                  Review
                </button>
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

export default JudgeDashboard;


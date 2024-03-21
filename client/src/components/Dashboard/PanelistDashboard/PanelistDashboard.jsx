// // import React, { useState, useEffect } from "react";
// // import "./PanelistDashboard.css";
// // // import Timer from "../Participant/Timer";
// // import Navbar2 from "../../Navbar/Navbar2";
// // import axios from "axios";
// // import { PanelistService } from "../../../service/panelist.service";
// // import { UserInfo } from "../../../utils/helper";
 
// // function PanelistDashboard() {
// //   const [teams, setTeams] = useState([]);
// //   const [showMessage, setShowMessage] = useState(false);
 
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
 
// //   const handleStatusChange = async (ideaId, newStatus) => {
// //     try {
// //       const panelistId = (new UserInfo()).getEmail();
// //       console.log(panelistId);
 
// //       const data = await PanelistService().giveReview(panelistId, ideaId, { "suggestion": '', "status": newStatus });
// //       const updatedTeams = teams.map((team) =>
// //         team.idea && team.idea.id === ideaId ? { ...team, idea: { ...team.idea, status: newStatus } } : team
// //       );
// //       setTeams(updatedTeams);
// //       //pop up message.
// //       setShowMessage(true);
// //       setTimeout(() => {
// //         setShowMessage(false);
// //       }, 3000); // Hide message after 3 seconds
// //     } catch (e) {
// //       console.error("Failed to update status:", e);
// //     }
// //   };
 
// //   return (
// //     <div style={{ backgroundColor: "#040720" }}>
// //       <Navbar2 />
// //       <div className="Bo">
// //         <div style={{ backgroundColor: "Black" }} className="Head">
// //           <h1>Panelist Dashboard</h1>
// //         </div>
// //         <div className="ToCan">
// //           <h2>Total Teams</h2>
// //           <p>
// //             {teams.length}
// //           </p>
// //         </div>
// //       </div>
// //       <table className="cuTa">
// //         <thead>
// //           <tr>
// //             <th>Team Name</th>
// //             <th>Idea Title</th>
// //             <th>Problem Description</th>
// //             <th>Status</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {teams.map((team, index) => (
// //             <tr key={team.id} className={index % 2 === 0 ? "trLight" : "trDark"}>
// //               <td>{team.teamName}</td>
// //               <td>{team.idea ? team.idea.title : ""}</td>
// //               <td>{team.idea ? team.idea.description : ""}</td>
// //               <td>
// //                 <button className="hi" onClick={() => handleStatusChange(team.idea?.id, "Approved")}>
// //                   Approve
// //                 </button>
// //                 <button className="hi" onClick={() => handleStatusChange(team.idea?.id, "Disapproved")}>
// //                   Disapprove
// //                 </button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //       {showMessage && <div className="popup">Idea has been approved!</div>} 
// //     </div>
// //   );
// // }
 
// // export default PanelistDashboard;

// import React, { useState, useEffect } from "react";
// import "./PanelistDashboard.css";
// import Timer from "../Participant/Timer";
// import Navbar2 from "../../Navbar/Navbar2";
// import axios from "axios";
// import { PanelistService } from "../../../service/panelist.service";
// import { UserInfo } from "../../../utils/helper";

// function PanelistDashboard() {
//   const [teams, setTeams] = useState([]);
//   const [showMessage, setShowMessage] = useState(false); // State to manage pop-up message

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

//   const handleStatusChange = async (ideaId, newStatus) => {
//     try {
//       const panelistId = new UserInfo().getEmail();
//       console.log(panelistId);

//       const data = await PanelistService().giveReview(panelistId, ideaId, { suggestion: "", status: newStatus });
//       const updatedTeams = teams.map((team) =>
//         team.idea && team.idea.id === ideaId ? { ...team, idea: { ...team.idea, status: newStatus } } : team
//       );
//       setTeams(updatedTeams);

//       if (newStatus === "Approved") {
//         window.confirm("Idea has been approved!");
//       } else if (newStatus === "Disapproved") {
//         window.confirm("Idea has been disapproved!");
//       }
//     } catch (e) {
//       console.error("Failed to update status:", e);
//     }
//   };

//   return (
//     <div style={{ backgroundColor: "#040720" }}>
//       <Navbar2 />
//       <div className="Bo">
//         <div style={{ backgroundColor: "Black" }} className="Head">
//           <h1>Panelist Dashboard</h1>
//         </div>
//         <div className="ToCan">
//           <h2>Total Teams</h2>
//           <p>{teams.length}</p>
//         </div>
//       </div>
//       <table className="cuTa">
//         <thead>
//           <tr>
//             <th>Team Name</th>
//             <th>Idea Title</th>
//             <th>Problem Description</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {teams.map((team, index) => (
//             <tr key={team.id} className={index % 2 === 0 ? "trLight" : "trDark"}>
//               <td>{team.teamName}</td>
//               <td>{team.idea ? team.idea.title : ""}</td>
//               <td>{team.idea ? team.idea.description : ""}</td>
//               <td>
//                 <button className="hi" onClick={() => handleStatusChange(team.idea?.id, "Approved")}>
//                   Approve
//                 </button>
//                 <button className="hi" onClick={() => handleStatusChange(team.idea?.id, "Disapproved")}>
//                   Disapprove
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {showMessage && (
//         <div
//           style={{
//             position: "fixed",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             backgroundColor: "rgba(0, 0, 0, 0.8)",
//             color: "white",
//             padding: "20px",
//             borderRadius: "5px",
//             zIndex: "9999",
//           }}
//         >
//           Idea has been approved!
//         </div>
//       )}
//     </div>
//   );
// }

// export default PanelistDashboard;

import React, { useState, useEffect } from "react";
import "./PanelistDashboard.css";
import Navbar2 from "../../Navbar/Navbar2";
import axios from "axios";
import { PanelistService } from "../../../service/panelist.service";
import { UserInfo } from "../../../utils/helper";

function PanelistDashboard() {
  const [teams, setTeams] = useState([]);
  const [dialogMessage, setDialogMessage] = useState(""); // State to manage dialog message
  const [showDialog, setShowDialog] = useState(false); // State to manage dialog visibility

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

  const handleStatusChange = async (ideaId, newStatus) => {
    try {
      const panelistId = new UserInfo().getEmail();
      console.log(panelistId);

      const data = await PanelistService().giveReview(panelistId, ideaId, { suggestion: "", status: newStatus });
      const updatedTeams = teams.map((team) =>
        team.idea && team.idea.id === ideaId ? { ...team, idea: { ...team.idea, status: newStatus } } : team
      );
      setTeams(updatedTeams);

      // Set dialog message based on status change
      setDialogMessage(newStatus === "Approved" ? "Idea has been approved!" : "Idea has been disapproved!");
      // Show dialog
      setShowDialog(true);
    } catch (e) {
      console.error("Failed to update status:", e);
    }
  };

  const handleCloseDialog = () => {
    // Hide dialog
    setShowDialog(false);
  };

  return (
    <div style={{ backgroundColor: "#040720" }}>
      <Navbar2 />
      <div className="Bo">
        <div style={{ backgroundColor: "Black" }} className="Head">
          <h1>Panelist Dashboard</h1>
        </div>
        <div className="ToCan">
          <h2>Total Teams</h2>
          <p>{teams.length}</p>
        </div>
      </div>
      <table className="cuTa">
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Idea Title</th>
            <th>Problem Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={team.id} className={index % 2 === 0 ? "trLight" : "trDark"}>
              <td>{team.teamName}</td>
              <td>{team.idea ? team.idea.title : ""}</td>
              <td>{team.idea ? team.idea.description : ""}</td>
              <td>
                <button className="hi" onClick={() => handleStatusChange(team.idea?.id, "Approved")}>
                  Approve
                </button>
                <button className="hi" onClick={() => handleStatusChange(team.idea?.id, "Disapproved")}>
                  Disapprove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showDialog && (
        <div className="dialogbox">
          <p>{dialogMessage}</p>
          <button onClick={handleCloseDialog}>Close</button>
        </div>
      )}
    </div>
  );
}

export default PanelistDashboard;

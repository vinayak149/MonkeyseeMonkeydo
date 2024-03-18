import React, { useState, useEffect } from "react";
import "./PanelistDashboard.css";
import Timer from "../Participant/Timer";
import Navbar2 from "../../Navbar/Navbar2";
import axios from "axios";
 
function PanelistDashboard() {
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
            <th>Team ID</th>
            <th>Problem Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={team.id} className={index % 2 === 0 ? "trLight" : "trDark"}>
              <td>{team.teamName}</td>
              <td>{team.id}</td>
              <td>{team.idea ? team.idea.description : ""}</td>
              <td>
                <button className="hi" onClick={() => handleStatusChange(team.id, "Approved")}>
                  Approve
                </button>
                <button className="hi" onClick={() => handleStatusChange(team.id, "Disapproved")}>
                  Disapprove
                </button>
                {/* <button onClick={() => handleStatusChange(team.id, "Review")}>
                  Review
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
 
export default PanelistDashboard;
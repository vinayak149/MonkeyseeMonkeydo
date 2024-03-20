import React, { useState, useEffect } from "react";
import "./PanelistDashboard.css";
import Timer from "../Participant/Timer";
import Navbar2 from "../../Navbar/Navbar2";
import axios from "axios";
import { PanelistService } from "../../../service/panelist.service";
import { UserInfo } from "../../../utils/helper";
 
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
 
  const handleStatusChange = async (ideaId, newStatus) => {
    try {
      const panelistId = (new UserInfo()).getEmail();
      console.log(panelistId);
 
      const data = await PanelistService().giveReview(panelistId, ideaId, { "suggestion": '', "status": newStatus });
      const updatedTeams = teams.map((team) =>
        team.idea && team.idea.id === ideaId ? { ...team, idea: { ...team.idea, status: newStatus } } : team
      );
      setTeams(updatedTeams);
    } catch (e) {
      console.error("Failed to update status:", e);
    }
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
          <p>
            {teams.length}
          </p>
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
    </div>
  );
}
 
export default PanelistDashboard;
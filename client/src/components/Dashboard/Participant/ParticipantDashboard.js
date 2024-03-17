import React, { useState, useEffect } from "react";
import "./ParticipantDashboard.css";
import Timer from "./Timer";
import Widget from "./Widget";
import AnimatedNumber from "./AnimatedNumber";
import Navbar2 from "../../Navbar/Navbar2";
import { ParticipantService} from "../../../service/participant.service";

const ParticipantDashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    teamName: "",
    totalCompetitors: 0,
    hackathonTimeRemaining: "",
    projectSubmissionTimeRemaining: "",
    projectStatus: "",
    teamMembers: [],
    projectName: "",
    projectDescription: "",
    projectCompletionPercentage: 0,
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const participantService=ParticipantService();
        const dashboard = await participantService.getDashboardProgress();
        setDashboardData(dashboard);
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div style={{ backgroundColor: "#040720" }}>
      <Navbar2 />
      <div className="container">
        <div className="boxes">
          <div className="line1">
            <div className="box1" style={{ backgroundColor: "#008080" }}>
              <h2>Team Name</h2>
              <p>{dashboardData.teamName}</p>
            </div>
            <div className="box2" style={{ backgroundColor: "#576CBC" }}>
              <h2>Total Competitors</h2>
              <p>
                <AnimatedNumber number={dashboardData.totalCompetitors} />
              </p>
            </div>
          </div>
          <div className="line2">
            <div className="box3" style={{ backgroundColor: "#576CBC" }}>
              <h2>Hackathon Timer </h2>
              <Timer />
            </div>
            <div
              className="box4"
              style={{ backgroundColor: "rgba(254, 83, 83, 0.75)" }}
            >
              <h2>Project Submission Timer</h2>
              <Timer />
            </div>
          </div>
        </div>
        <div className="box5" style={{ backgroundColor: "#008080" }}>
          <h2>Project Submission</h2>
          <p>Kindly submit your project code here.</p>
        </div>
        <div className="box6" style={{ backgroundColor: "#A5D7E8" }}>
          <h2>Status of Projected Submitted</h2>
          <Widget />
        </div>
      </div>
      <div className="team">
        <div className="members">
          <h1>Team Members</h1>
          {dashboardData.teamMembers.map((member, index) => (
            <p key={index}>{member}</p>
          ))}
        </div>
        <div className="project">
          <h1>Project Description</h1>
          <p>{dashboardData.projectDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ParticipantDashboard;

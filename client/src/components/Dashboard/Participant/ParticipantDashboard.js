import React, { useState, useEffect } from "react";
import "./ParticipantDashboard.css";
import Timer from "./Timer";
import Widget from "./Widget";
import AnimatedNumber from "./AnimatedNumber";
import Navbar2 from "../../Navbar/Navbar2";
 
// import MyParticles from '../../Particles/Particles';
// import CircularProgress from '@mui/joy/CircularProgress';
 
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
 
  // Moved outside the fetchDashboardData function
  // const [time, setTime] = useState({
  //   hackathonEndTime: '2024-03-09T00:00:00.000Z', // Placeholder, replace with real data
  //   projectSubmissionEndTime: '2024-03-09T00:00:00.000Z', // Placeholder, replace with real data
  // });
  const [dragging, setDragging] = useState(false); // New state for drag status
  const [files, setFiles] = useState([]); // New state for uploaded files
 
  // Handle Drag and Drop
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragging(true);
    } else if (e.type === "dragleave" || e.type === "drop") {
      setDragging(false);
    }
  };
 
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFiles([...files, ...e.dataTransfer.files]);
      e.dataTransfer.clearData();
    }
  };
 
  useEffect(() => {
    const fetchDashboardData = async () => {
      // Simulate fetching dashboard data
      const response = await fetch("/api/dashboard");
      const dashboard = await response.json();
      const teamResponse = await fetch("/api/team-info");
      const teamInfo = await teamResponse.json();
      const projectStatusResponse = await fetch("/api/project-status");
      const projectStatus = await projectStatusResponse.json();
 
      setDashboardData({
        ...dashboard,
        ...teamInfo,
        ...projectStatus,
      });
    };
 
    fetchDashboardData();
  }, []);
 
  // Note: No need for a second useEffect with an empty dependency array as shown in your initial code
  return (
    <div style={{ backgroundColor: "#040720" }}>
      {/* <MyParticles/> */}
      <Navbar2 />
      <div className="container">
        <div className="boxes">
          <div className="line1">
            <div className="box1" style={{ backgroundColor: "#008080" }}>
              <h2>Team Name</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              </p>
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
              {/* targetTime={time.hackathonEndTime}/> */}
            </div>
            <div
              className="box4"
              style={{ backgroundColor: "rgba(254, 83, 83, 0.75)" }}
            >
              <h2>Project Submission Timer</h2>
              <Timer />
              {/* targetTime={time.projectSubmissionEndTime} */}
            </div>
          </div>
        </div>
        <div className="box5" style={{ backgroundColor: "#008080" }}>
          <h2>Project Submission</h2>
          <p>Kindly Submit your code here.</p>
        </div>
        <div className="box6" style={{ backgroundColor: "#A5D7E8" }}>
          <h2>Status of Projected Submitted</h2>
          <div style={{ position: "relative" }}>
            <span
              style={{ position: "absolute", top: "10px", left: "2px" }}
            ></span>
            <Widget />
          </div>
        </div>
      </div>
      <div className="team">
        <div className="members">
          <h1>Team Members</h1>
          <p>Name 1</p>
          <p>Name 2</p>
          <p>Name 3</p>
          <p>Name 4</p>
        </div>
        <div className="project">
          <h1>Project Description</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          </p>
        </div>
      </div>
    </div>
  );
};
 
export default ParticipantDashboard;
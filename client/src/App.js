import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/NavBar';
import ParticipantDashboard from './components/ParticipantDashboard';
import JudgeDashboard from './components/JudgeDashboard';
import PanelistDashboard from './components/PanelistDashboard';
import IdeaSubmissionForm from './components/IdeaSubmissionForm'; // Ensure this path is correct
import Dashboard from './components/Dashboard';
import AddPanelistForm from './components/AddPanelistForm'; // Assuming you have this component
import AssignIdeaForm from './components/AssignIdeaForm'; // Assuming you have this component

// Import other necessary styles and components

function App() {
  // Set your submission deadline here
  const deadline = "2024-12-31T23:59:59.999Z";

  // Handler for form submission
  const handleIdeaSubmit = (idea) => {
    // Here, you would typically send the idea to your backend for processing
    console.log("Idea submitted:", idea);
    alert("Idea submitted successfully!");
    // Implement the API call to save the idea using fetch or axios
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/participant-dashboard" element={<ParticipantDashboard />} />
        <Route path="/judge-dashboard" element={<JudgeDashboard />} />
        <Route path="/panelist-dashboard" element={<PanelistDashboard />} />
        <Route path="/ideas/new" element={<IdeaSubmissionForm deadline={deadline} onSubmit={handleIdeaSubmit} />} />
        <Route path="/ideas/edit/:ideaId" element={<IdeaSubmissionForm deadline={deadline} onSubmit={handleIdeaSubmit} />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/add-panelist" element={<AddPanelistForm />} />
        <Route path="/assign-idea" element={<AssignIdeaForm />} />
        {/* Define other routes */}
        {/* Define other routes as needed */}
        <Route path="/submit-idea" element={
          <IdeaSubmissionForm 
            deadline={deadline} 
            onSubmit={handleIdeaSubmit} 
            // Optionally pass an ideaId if editing an existing idea
          />
        } />
      </Routes>
    </Router>
  );
}

export default App;

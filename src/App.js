import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ParticipantNavbar from './components/Navbars/ParticipantNavbar'; // Import ParticipantNavbar component
import ParticipantDashboard from './components/ParticipantDashboard';
import JudgeDashboard from './components/JudgeDashboard';
import PanelistDashboard from './components/PanelistDashboard';
import IdeaSubmissionForm from './components/IdeaSubmissionForm';
import Dashboard from './components/Dashboard';
import AddPanelistForm from './components/AddPanelistForm';
import AssignIdeaForm from './components/AssignIdeaForm';
import Login from './components/Login';
import SignUp from './components/Signup';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const deadline = "2024-12-31T23:59:59.999Z";

  const handleIdeaSubmit = (idea) => {
    console.log("Idea submitted:", idea);
    alert("Idea submitted successfully!");
  };

  return (
    <Router>
      <ParticleBackground />
      {/* Render ParticipantNavbar component */}
      <ParticipantNavbar />
      <Routes>
        <Route path='/auth-container' element={<Login/>}/>
        <Route path='/auth-con' element={<SignUp/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/participant-dashboard" element={<ParticipantDashboard />} />
        <Route path="/judge-dashboard" element={<JudgeDashboard />} />
        <Route path="/panelist-dashboard" element={<PanelistDashboard />} />
        <Route path="/ideas/new" element={<IdeaSubmissionForm deadline={deadline} onSubmit={handleIdeaSubmit} />} />
        <Route path="/ideas/edit/:ideaId" element={<IdeaSubmissionForm deadline={deadline} onSubmit={handleIdeaSubmit} />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/add-panelist" element={<AddPanelistForm />} />
        <Route path="/assign-idea" element={<AssignIdeaForm />} />
        {/* Define other routes */}
        <Route path="/submit-idea" element={
          <IdeaSubmissionForm 
            deadline={deadline} 
            onSubmit={handleIdeaSubmit} 
          />
        } />
      </Routes>
    </Router>
  );
}

export default App;

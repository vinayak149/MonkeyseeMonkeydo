import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Navbar from '../Navbar/Navbar';
import ParticipantDashboard from '../Dashboard/Participant/ParticipantDashboard';
// import JudgeDashboard from '../Dashboard/JudgeDashboard';
// import PanelistDashboard from '../Dashboard/PanelistDashboard';
import IdeaSubmissionForm from '../IdeaSubmissionForm';
import AddPanelistForm from '../AddPanelistForm';
import AssignIdeaForm from '../AssignIdeaForm';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import { AccountBox } from '../Account/account'; 
import RegistrationPage from '../RegistrationPage/RegistrationPage.js';
import PanelistDashboard from '../Dashboard/Participant/PanelistDashboard/PanelistDashboard.jsx';
import JudgeDashboard from '../Dashboard/Judge/JudgeDashboard.js';
import JudgeDashboard2 from '../Dashboard/Judge/JudgeDashboard2.js';

// import PanelistDashboard from './components/Dashboard/PanelistDashboard.js'
// import IdeaSubmissionForm from './components/IdeaSubmissionForm';
// import Dashboard from './components/Dashboard';
// import AddPanelistForm from './components/AddPanelistForm'; // Assuming you have this component
// import AssignIdeaForm from './components/AssignIdeaForm'; // Assuming you have this component
// import Login from './components/Login/Login.js'
// import SignUp from './components/Signup/Signup.js';


function Routing() {
    const deadline = "2024-12-31T23:59:59.999Z";
    const handleIdeaSubmit = (idea) => {
    console.log("Idea submitted:", idea);
    alert("Idea submitted successfully!");
  };
  return (
    <div>
        <Router>
        {/* <Navbar /> */}
        <Routes>
          {/* <Route path='/login' element={<Login/>}/> */}
          <Route path='/auth' element={<AccountBox/>}/>
          <Route path='/auth-con' element={<Signup/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path="/home" element={<Home />} />
          {/* <Route path="/judge-dashboard" element={<JudgeDashboard />} /> */}
          {/* <Route path="/panelist-dashboard" element={<PanelistDashboard />} /> */}
          <Route path="/dashboard" element={<ParticipantDashboard />} />
          <Route path="/judge" element={<JudgeDashboard/>}/>
          <Route path="/judge2" element={<JudgeDashboard2/>}/>
          <Route path='/panelist' element={<PanelistDashboard/>}/>
          <Route path="/ideas/new" element={<IdeaSubmissionForm deadline={deadline} onSubmit={handleIdeaSubmit} />} />
          <Route path="/ideas/edit/:ideaId" element={<IdeaSubmissionForm deadline={deadline} onSubmit={handleIdeaSubmit} />} />
          <Route path="/add-panelist" element={<AddPanelistForm />} />
          <Route path="/assign-idea" element={<AssignIdeaForm />} />
          <Route path="/register" element={<RegistrationPage/>} />
          <Route path="/submit-idea" element={
            <IdeaSubmissionForm 
              deadline={deadline} 
              onSubmit={handleIdeaSubmit} 
            />
          } />
        </Routes>
        </Router>
    </div>
  )
}

export default Routing

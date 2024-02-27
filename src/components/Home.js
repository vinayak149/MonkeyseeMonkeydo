import React from 'react';
import { useNavigate ,Link} from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();

  const redirectToIdeaSubmission = () => {
    navigate('/submit-idea'); // Ensure this path matches the route defined for IdeaSubmissionForm
  };

  
  return (
  <div>
    <h1>Welcome to the Hackathon Management System</h1>
    <Link to="/ideas/new">Submit a New Idea</Link>
    {/* If listing ideas, provide an edit link like below */}
    {/* <Link to={`/ideas/edit/${ideaId}`}>Edit</Link> */}
  </div>
);
  
};

export default Home;

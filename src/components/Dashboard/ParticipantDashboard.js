import React, { useState } from 'react';
// import axios from 'axios'; // Assuming Axios is used for HTTP requests
// import Navbar from '../Navbar/Navbar';
import "./ParticipantDashboard.css"

function ParticipantDashboard() 
{
    
  const [ideaTitle, setIdeaTitle] = useState('');
  const [ideaDescription, setIdeaDescription] = useState('');
  const [submittedIdeas, setSubmittedIdeas] = useState([
    // Mocked data; in a real app, this would come from the backend
    { id: 1, title: 'Innovative Recycling System', description: 'A system to improve recycling efficiency.' },
    { id: 2, title: 'Smart Parking Solution', description: 'An app to find and reserve parking spots in real-time.' },
  ]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    name === 'ideaTitle' ? setIdeaTitle(value) : setIdeaDescription(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulate adding the new idea to the list (in a real app, fetch new list from backend after submission)
    const newIdea = {
      id: submittedIdeas.length + 1,
      title: ideaTitle,
      description: ideaDescription,
    };
    setSubmittedIdeas([...submittedIdeas, newIdea]);

    // In a real scenario, use axios.post('/api/submit-idea', { title: ideaTitle, description: ideaDescription })
    // .then(response => {
    //   // Handle successful submission, e.g., fetch updated list of ideas
    // })
    // .catch(error => {
    //   // Handle error
    // });

    // Reset form fields after submission
    setIdeaTitle('');
    setIdeaDescription('');
  };

  return (
    <div className='participant-board'> 
      <h2>Welcome to Your Dashboard, Participant!</h2>
      <p>This is your participant dashboard. From here, you can:</p>
      <div>
        <h3>Submit New Idea</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Idea Title:
              <input
                type="text"
                name="ideaTitle"
                value={ideaTitle}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Idea Description:
              <textarea
                name="ideaDescription"
                value={ideaDescription}
                onChange={handleChange}
              />
            </label>
          </div>
          <button type="submit">Submit Idea</button>
        </form>
      </div>
      <div>
        <h3>Submitted Ideas</h3>
        <ul>
          {submittedIdeas.map((idea) => (
            <li key={idea.id}>
              <strong>{idea.title}</strong>: {idea.description}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Hackathon Rules</h3>
        <p>Be creative, respect each other, and have fun!</p>
      </div>
    </div>
  );
}

export default ParticipantDashboard;

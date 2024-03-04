import React, { useState } from 'react';
import IdeaReviewForm from '../IdeaReviewForm'// Import the IdeaReviewForm component

function PanelistDashboard() {
  // Mock data for demonstration; you would fetch real data from the backend in a real app
  const [ideas, setIdeas] = useState([
    { id: 1, title: 'Idea 1', description: 'Description of Idea 1' },
    { id: 2, title: 'Idea 2', description: 'Description of Idea 2' },
    // Add more ideas as needed
  ]);

  const handleSubmitReview = (review) => {
    // Here you can handle the submission of the review data, e.g., send it to the backend for processing
    console.log('Review submitted:', review);
    // Update UI or perform any other actions based on the review submission
  };

  return (
    <div className="panelist-dashboard">
      <h2>Panelist Dashboard</h2>
      <div className="ideas-list">
        {ideas.map((idea) => (
          <IdeaReviewForm key={idea.id} idea={idea} onSubmitReview={handleSubmitReview} />
        ))}
      </div>
    </div>
  );
}

export default PanelistDashboard;

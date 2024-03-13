import React, { useState } from 'react';
import "./ideaReviewForm.css"
function IdeaReviewForm({ idea, onSubmitReview }) {
  const [score, setScore] = useState('');
  const [feedback, setFeedback] = useState('');
  const [selection, setSelection] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare review object
    const review = {
      ideaId: idea.id,
      score: score,
      feedback: feedback,
      selected: selection
    };
    onSubmitReview(review); // Pass review data to parent component for processing
    // Reset form fields after submission
    setScore('');
    setFeedback('');
    setSelection(null);
  };

  return (
    <div className="idea-review-form">
      <h2>Review Idea: {idea.title}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Score:</label>
          <input type="number" value={score} onChange={(e) => setScore(e.target.value)} min="1" max="10" required />
        </div>
        <div>
          <label>Feedback:</label>
          <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} required />
        </div>
        <div>
          <label>Select:</label>
          <select value={selection} onChange={(e) => setSelection(e.target.value)} required>
            <option value="">Select</option>
            <option value="select">Select</option>
            <option value="reject">Reject</option>
          </select>
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default IdeaReviewForm;

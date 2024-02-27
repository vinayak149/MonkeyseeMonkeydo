import React from 'react';
import './JudgeDashboard.css'; // Make sure to create and import the CSS file

class JudgeDashboard extends React.Component {
  state = {
    // Mock submissions data; in a real app, this data would come from your backend
    submissions: [
      { id: 1, title: 'Eco-Friendly Packaging', description: 'A proposal for biodegradable packaging materials.', rating: null, feedback: '' },
      { id: 2, title: 'Smart Irrigation System', description: 'An IoT solution for optimizing water usage in agriculture.', rating: null, feedback: '' },
    ],
  };

  // Placeholder functions for handling rating and feedback updates
  handleRatingChange = (id, rating) => {
    this.setState(prevState => ({
      submissions: prevState.submissions.map(submission =>
        submission.id === id ? { ...submission, rating } : submission
      ),
    }));
  };

  handleFeedbackChange = (id, feedback) => {
    this.setState(prevState => ({
      submissions: prevState.submissions.map(submission =>
        submission.id === id ? { ...submission, feedback } : submission
      ),
    }));
  };

  renderSubmissions() {
    return this.state.submissions.map(submission => (
      <div key={submission.id} className="submission">
        <h3>{submission.title}</h3>
        <p>{submission.description}</p>
        {/* Placeholder for rating; you might use a custom component or a library component */}
        <input
          type="number"
          placeholder="Rating"
          value={submission.rating || ''}
          onChange={(e) => this.handleRatingChange(submission.id, e.target.value)}
        />
        <textarea
          placeholder="Feedback"
          value={submission.feedback}
          onChange={(e) => this.handleFeedbackChange(submission.id, e.target.value)}
        />
      </div>
    ));
  }

  render() {
    return (
      <div className="judge-dashboard">
        <h2>Judge Dashboard</h2>
        <div className="submissions">
          {this.renderSubmissions()}
        </div>
      </div>
    );
  }
}

export default JudgeDashboard;

import React from 'react';
import './PanelistDashboard.css'; // Make sure to create and import the CSS file

class PanelistDashboard extends React.Component {
  state = {
    // Mock data for demonstration; you would fetch real data from the backend in a real app
    statistics: {
      totalSubmissions: 42,
      averageRating: 4.5,
      topSubmission: 'Eco-Friendly Urban Transport',
    },
  };

  render() {
    const { totalSubmissions, averageRating, topSubmission } = this.state.statistics;
    
    return (
      <div className="panelist-dashboard">
        <h2>Panelist Dashboard</h2>
        <div className="statistics">
          <div className="stat-item">
            <label>Total Submissions</label>
            <div>{totalSubmissions}</div>
          </div>
          <div className="stat-item">
            <label>Average Rating</label>
            <div>{averageRating}</div>
          </div>
          <div className="stat-item">
            <label>Top Submission</label>
            <div>{topSubmission}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default PanelistDashboard;

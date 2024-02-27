import React from 'react';
import axios from 'axios'; // Assuming Axios is used for HTTP requests
import './ParticipantDashboard.css';

class ParticipantDashboard extends React.Component {
  state = {
    ideaTitle: '',
    ideaDescription: '',
    submittedIdeas: [
      // Mocked data; in a real app, this would come from the backend
      { id: 1, title: 'Innovative Recycling System', description: 'A system to improve recycling efficiency.' },
      { id: 2, title: 'Smart Parking Solution', description: 'An app to find and reserve parking spots in real-time.' },
    ],
    hackathonRules: 'Be creative, respect each other, and have fun!' // Static text for simplicity
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { ideaTitle, ideaDescription } = this.state;

    // Here you would submit to your backend instead of logging to the console
    console.log('Submitting idea:', ideaTitle, ideaDescription);

    // Simulate adding the new idea to the list (in a real app, fetch new list from backend after submission)
    const newIdea = {
      id: this.state.submittedIdeas.length + 1,
      title: ideaTitle,
      description: ideaDescription,
    };
    this.setState({
      submittedIdeas: [...this.state.submittedIdeas, newIdea],
      ideaTitle: '',
      ideaDescription: '',
    });

    // In a real scenario, use axios.post('/api/submit-idea', { title: ideaTitle, description: ideaDescription })
    // .then(response => {
    //   // Handle successful submission, e.g., fetch updated list of ideas
    // })
    // .catch(error => {
    //   // Handle error
    // });
  };

  renderSubmittedIdeas() {
    return this.state.submittedIdeas.map(idea => (
      <li key={idea.id}>
        <strong>{idea.title}</strong>: {idea.description}
      </li>
    ));
  }

  render() {
    return (
      <div>
        <h2>Welcome to Your Dashboard, Participant!</h2>
        <p>This is your participant dashboard. From here, you can:</p>
        <div>
          <h3>Submit New Idea</h3>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>
                Idea Title:
                <input
                  type="text"
                  name="ideaTitle"
                  value={this.state.ideaTitle}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                Idea Description:
                <textarea
                  name="ideaDescription"
                  value={this.state.ideaDescription}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <button type="submit">Submit Idea</button>
          </form>
        </div>
        <div>
          <h3>Submitted Ideas</h3>
          <ul>{this.renderSubmittedIdeas()}</ul>
        </div>
        <div>
          <h3>Hackathon Rules</h3>
          <p>{this.state.hackathonRules}</p>
        </div>
      </div>
    );
  }
}

export default ParticipantDashboard;

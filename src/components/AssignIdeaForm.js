// AssignIdeaForm.js
import React, { useState } from 'react';

const AssignIdeaForm = ({ ideas, panelists, onAssignIdea }) => {
  const [selectedIdea, setSelectedIdea] = useState('');
  const [selectedPanelist, setSelectedPanelist] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAssignIdea(selectedIdea, selectedPanelist);
    // Reset form (optional)
    setSelectedIdea('');
    setSelectedPanelist('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="ideaSelect">Select Idea:</label>
        <select
          id="ideaSelect"
          value={selectedIdea}
          onChange={(e) => setSelectedIdea(e.target.value)}
          required
        >
          <option value="">Please choose an idea</option>
          {ideas.map((idea) => (
            <option key={idea.id} value={idea.id}>{idea.title}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="panelistSelect">Assign to Panelist:</label>
        <select
          id="panelistSelect"
          value={selectedPanelist}
          onChange={(e) => setSelectedPanelist(e.target.value)}
          required
        >
          <option value="">Please choose a panelist</option>
          {panelists.map((panelist) => (
            <option key={panelist.id} value={panelist.id}>{panelist.name}</option>
          ))}
        </select>
      </div>
      <button type="submit">Assign Idea</button>
    </form>
  );
};

export default AssignIdeaForm;

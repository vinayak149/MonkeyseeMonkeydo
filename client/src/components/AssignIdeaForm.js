// AssignIdeaForm.js
import React, { useState } from 'react';

function AssignIdeaForm() {
  const [ideaAssignment, setIdeaAssignment] = useState({
    ideaId: '',
    panelistId: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIdeaAssignment({ ...ideaAssignment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the assignment data to your backend for processing
    console.log("Idea assigned:", ideaAssignment);
    alert("Idea assigned successfully!");
    // Implement the API call to save the assignment using fetch or axios
    // Reset form fields after submission
    setIdeaAssignment({
      ideaId: '',
      panelistId: ''
    });
  };

  return (
    <div className="assign-idea-form">
      <h2>Assign Idea</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Idea ID:</label>
          <input type="text" name="ideaId" value={ideaAssignment.ideaId} onChange={handleChange} required />
        </div>
        <div>
          <label>Panelist ID:</label>
          <input type="text" name="panelistId" value={ideaAssignment.panelistId} onChange={handleChange} required />
        </div>
        <button type="submit">Assign Idea</button>
      </form>
    </div>
  );
}

export default AssignIdeaForm;

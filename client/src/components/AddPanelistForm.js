import React, { useState } from 'react';

const AddPanelistForm = ({ onAddPanelist }) => {
  const [panelistName, setPanelistName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddPanelist(panelistName);
    setPanelistName(''); // Reset form after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="panelistName">Panelist Name:</label>
        <input
          id="panelistName"
          type="text"
          value={panelistName}
          onChange={(e) => setPanelistName(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Panelist</button>
    </form>
  );
};

export default AddPanelistForm;

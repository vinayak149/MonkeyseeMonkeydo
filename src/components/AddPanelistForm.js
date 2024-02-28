// AddPanelistForm.js
import React, { useState } from 'react';

function AddPanelistForm() {
  const [panelist, setPanelist] = useState({
    name: '',
    email: '',
    role: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPanelist({ ...panelist, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the panelist data to your backend for processing
    console.log("Panelist added:", panelist);
    alert("Panelist added successfully!");
    // Implement the API call to save the panelist using fetch or axios
    // Reset form fields after submission
    setPanelist({
      name: '',
      email: '',
      role: ''
    });
  };

  return (
    <div className="add-panelist-form">
      <h2>Add Panelist</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={panelist.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={panelist.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Role:</label>
          <input type="text" name="role" value={panelist.role} onChange={handleChange} required />
        </div>
        <button type="submit">Add Panelist</button>
      </form>
    </div>
  );
}

export default AddPanelistForm;

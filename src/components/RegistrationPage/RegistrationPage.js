import React, { useState } from 'react';
import '../RegistrationPage/RegistrationPage.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    teamName: '',
    participants: Array(3).fill({ name: '', email: '' }), // Start with 3 participants
    problemStatement: '',
    problemDescription: '',
    domain: '',
  });

  const handleChange = (e, field, index) => {
    if (index !== undefined) {
      const updatedParticipants = formData.participants.map((participant, idx) => {
        if (idx === index) {
          return { ...participant, [field]: e.target.value };
        }
        return participant;
      });
      setFormData({
        ...formData,
        participants: updatedParticipants,
      });
    } else {
      setFormData({ ...formData, [field]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation for compulsory fields
    const areParticipantsValid = formData.participants.slice(0, 3).every(p => p.name && p.email);
    const isFormValid = formData.teamName && areParticipantsValid && formData.problemStatement && formData.problemDescription && formData.domain;

    if (!isFormValid) {
      alert('Please fill in all required fields.');
      return;
    }

    console.log(formData);
    // Form submission logic goes here
  };

  const addParticipant = () => {
    if (formData.participants.length < 4) {
      const newParticipant = { name: '', email: '' };
      setFormData(prevFormData => ({
        ...prevFormData,
        participants: [...prevFormData.participants, newParticipant],
      }));
    }
  };

  const calculateRemainingCharacters = (text, maxLength) => maxLength - text.length;

  return (
    <form onSubmit={handleSubmit} className="registrationForm">
      <h2>Registration Form</h2>

      <label htmlFor="teamName">Team Name <span className="requiredIndicator">*</span></label>
      <input
        type="text"
        id="teamName"
        value={formData.teamName}
        onChange={(e) => handleChange(e, 'teamName')}
        required
      />

      {formData.participants.map((participant, index) => (
        <div key={index}>
          <h3>Participant-{index + 1} {index < 3 ? <span className="requiredIndicator">*</span> : ''}</h3>
          <label htmlFor={`name-${index}`}>Name</label>
          <input
            type="text"
            id={`name-${index}`}
            value={participant.name}
            onChange={(e) => handleChange(e, 'name', index)}
            required={index < 3}
          />

          <label htmlFor={`email-${index}`}>Email</label>
          <input
            type="email"
            id={`email-${index}`}
            value={participant.email}
            onChange={(e) => handleChange(e, 'email', index)}
            required={index < 3}
          />
        </div>
      ))}

      {formData.participants.length < 4 && (
        <button type="button" onClick={addParticipant} className="addParticipantButton">Add Participant</button>
      )}

      <label htmlFor="problemStatement">Problem Statement <span className="requiredIndicator">*</span></label>
      <div className="textarea-container">
        <textarea
          id="problemStatement"
          value={formData.problemStatement}
          onChange={(e) => handleChange(e, 'problemStatement')}
          maxLength="500"
          required
        />
        <div className="words-left">
          {calculateRemainingCharacters(formData.problemStatement, 500)} characters left
        </div>
      </div>

      <label htmlFor="problemDescription">Problem Description <span className="requiredIndicator">*</span></label>
      <div className="textarea-container">
        <textarea
          id="problemDescription"
          value={formData.problemDescription}
          onChange={(e) => handleChange(e, 'problemDescription')}
          maxLength="500"
          required
        />
        <div className="words-left">
          {calculateRemainingCharacters(formData.problemDescription, 500)} characters left
        </div>
      </div>

      <label htmlFor="domain">Select Domain <span className="requiredIndicator">*</span></label>
      <select
        id="domain"
        value={formData.domain}
        onChange={(e) => handleChange(e, 'domain')}
        required
      >
        <option value="">--Please choose an option--</option>
        <option value="AI and Data">AI and Data</option>
        <option value="Cybersecurity">Cybersecurity</option>
        <option value="Digital Engineering">Digital Engineering</option>
        <option value="Experience Design">Experience Design</option>
        <option value="Operations Transformation">Operations Transformation</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm;

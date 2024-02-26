import React, { useState } from 'react';

const IdeaForm = ({ onSubmit }) => {
  const [idea, setIdea] = useState({
    title: '',
    description: '',
    domain: '',
    teamMembers: ''
  });

  const handleChange = (e) => {
    setIdea({ ...idea, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(idea);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Idea Title"
        value={idea.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Idea Description"
        value={idea.description}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="teamMembers"
        placeholder="Team Members (comma separated)"
        value={idea.teamMembers}
        onChange={handleChange}
        required
      />
      <select name="domain" value={idea.domain} onChange={handleChange} required>
        <option value="">Select Domain</option>
        <option value="tech">Tech</option>
        <option value="health">Health</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default IdeaForm;

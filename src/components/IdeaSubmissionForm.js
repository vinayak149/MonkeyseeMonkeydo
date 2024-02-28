import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const IdeaSubmissionForm = ({ deadline, onSubmit }) => {
  const [teamMembers, setTeamMembers] = useState([{ name: '' }]);
  const [idea, setIdea] = useState({ title: '', description: '', domain: '' });
  const [isBeforeDeadline, setIsBeforeDeadline] = useState(false);
  const navigate = useNavigate();
  const { ideaId } = useParams(); // React Router to handle idea ID in URL

  // Predefined domains for dropdown
  const domains = ["Healthcare", "Fintech", "Education", "Sustainability", "Other"];

  useEffect(() => {
    const deadlineDate = new Date(deadline);
    const now = new Date();
    setIsBeforeDeadline(now < deadlineDate);
    
    if (ideaId) {
      // TODO: Fetch the idea for editing by ID
      console.log(`Fetching idea with ID: ${ideaId}`);
      // Simulated fetched data
      const fetchedIdea = { title: 'Sample Idea', description: 'Sample Description', domain: 'Education' };
      setIdea(fetchedIdea);
      // Simulate adding team members if available
      setTeamMembers([{ name: 'Member 1' }, { name: 'Member 2' }]); // Adjust according to fetched data
    }
  }, [ideaId, deadline]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('member')) {
      const index = parseInt(name.split('-')[1], 10);
      const newMembers = [...teamMembers];
      newMembers[index].name = value;
      setTeamMembers(newMembers);
    } else {
      setIdea(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleAddMember = () => {
    const newMembers = [...teamMembers, { name: '' }];
    if (newMembers.length <= 4) {
      setTeamMembers(newMembers);
    }
  };

  const handleRemoveMember = (index) => {
    const newMembers = [...teamMembers];
    newMembers.splice(index, 1);
    setTeamMembers(newMembers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isBeforeDeadline) {
      console.log('Submitting idea:', { ...idea, teamMembers });
      onSubmit({ ...idea, teamMembers }); // Adjust based on your backend needs
      navigate('/'); // Redirect to home or confirmation page
    } else {
      alert('The deadline for submitting ideas has passed.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{ideaId ? 'Edit Idea' : 'Submit New Idea'}</h2>
      {teamMembers.map((member, index) => (
        <div key={index}>
          <label>Team Member {index + 1}</label>
          <input
            type="text"
            name={`member-${index}`}
            value={member.name}
            onChange={handleChange}
            disabled={!isBeforeDeadline}
          />
          {index > 0 && (
            <button type="button" onClick={() => handleRemoveMember(index)}>-</button>
          )}
        </div>
      ))}
      <button type="button" onClick={handleAddMember} disabled={teamMembers.length >= 4 || !isBeforeDeadline}>
        Add Team Member
      </button>
      <br />
      <label>Title</label>
      <input
        type="text"
        name="title"
        value={idea.title}
        onChange={handleChange}
        disabled={!isBeforeDeadline}
      />
      <label>Description</label>
      <textarea
        name="description"
        value={idea.description}
        onChange={handleChange}
        disabled={!isBeforeDeadline}
      />
      <label>Domain</label>
      <select
        name="domain"
        value={idea.domain}
        onChange={handleChange}
        disabled={!isBeforeDeadline}
      >
        {domains.map(domain => (
          <option key={domain} value={domain}>{domain}</option>
        ))}
      </select>
      <button type="submit" disabled={!isBeforeDeadline}>
        {ideaId ? 'Update Idea' : 'Submit Idea'}
      </button>
    </form>
  );
};

export default IdeaSubmissionForm;

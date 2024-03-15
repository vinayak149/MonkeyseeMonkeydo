// import React, { useState } from 'react';
// import '../RegistrationPage/RegistrationPage.css';
// import Navbar2 from '../Navbar/Navbar2'; 
// import MyParticles from '../Particles/Particles.js'
// import { IdeaService } from '../../service/idea.service.js';
// import { TeamService } from '../../service/team.service.js';

// function RegistrationForm() {
//   const [formData, setFormData] = useState({
//     teamName: '',
//     participants: [{ name: '', email: '' }],
//     problemStatement: '',
//     problemDescription: '',
//     domain: '',
//   });

//   const [teamId, setTeamId] = useState(null);
//   const handleChange = (e, field, index) => {
//     if (index !== undefined) {
//       const updatedParticipants = formData.participants.map((participant, idx) => {
//         if (idx === index) {
//           return { ...participant, [field]: e.target.value };
//         }
//         return participant;
//       });
//       setFormData({
//         ...formData,
//         participants: updatedParticipants,
//       });
//     } else {
//       setFormData({ ...formData, [field]: e.target.value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const ideaData = {
//       teamName: formData.teamName,
//       participants: formData.participants,
//       problemStatement: formData.problemStatement,
//       problemDescription: formData.problemDescription,
//       domain: formData.domain,
//     };
//     try {
//       await IdeaService.addIdea(ideaData);
//       console.log("Idea registration successful:", ideaData);
//       // Adding the bloody participants
//       await Promise.all(
//         formData.participants.map(async (participant) => {
//           await TeamService.addParticipantToTeam(teamId, participant);
//         })
//       );
//       alert("Idea registered!");
//     } catch (error) {
//       console.error("Idea registration failed:", error);
//       alert("Idea not registered!");
//     }
//   };

//   const addParticipant = () => {
//     if (formData.participants.length < 4) {
//       const newParticipant = { name: '', email: '' };
//       setFormData(prevFormData => ({
//         ...prevFormData,
//         participants: [...prevFormData.participants, newParticipant],
//       }));
//     }
//   };

//   const checkTeamNameValidity = async() => {
//     try {
//       const { id } = await TeamService.addTeam({ teamName: formData.teamName });
//       console.log('Team added successfully with ID:', id);
//       setTeamId(id);
      
//     } catch (error) {
//       console.error('Error adding team:', error);
//       alert("team name not valid!");
//     }
//   };

//   const calculateRemainingCharacters = (text, maxLength) => maxLength - text.length;

//   return (
//     <div>
//       <MyParticles/>
//       <Navbar2/>
//       <form onSubmit={handleSubmit} className="registrationForm">
//         <h2>Registration Form</h2>

//         <label htmlFor="teamName">Team Name <span className="requiredIndicator">*</span></label>
//         <div className="teamNameContainer">
//           <input
//             type="text"
//             id="teamName"
//             value={formData.teamName}
//             onChange={(e) => handleChange(e, 'teamName')}
//             required
//           />
//           <button type="button" onClick={checkTeamNameValidity} className="checkValidityButton">Check Validity</button>
//         </div>

//         {formData.participants.map((participant, index) => (
//           <div key={index}>
//             <h3>Participant-{index + 1} {index < 3 ? <span className="requiredIndicator">*</span> : ''}</h3>
//             <label htmlFor={`name-${index}`}>Name</label>
//             <input
//               type="text"
//               id={`name-${index}`}
//               value={participant.name}
//               onChange={(e) => handleChange(e, 'name', index)}
//               required={index < 3} // Require name for first three participants
//             />

//             <label htmlFor={`email-${index}`}>Email</label>
//             <input
//               type="email"
//               id={`email-${index}`}
//               value={participant.email}
//               onChange={(e) => handleChange(e, 'email', index)}
//               required={index < 3} // Require email for first three participants
//             />
//           </div>
//         ))}

//         {formData.participants.length < 4 && (
//           <button type="button" onClick={addParticipant} className="addParticipantButton">Add Participant</button>
//         )}

//         <label htmlFor="problemStatement">Problem Statement <span className="requiredIndicator">*</span></label>
//         <div className="textarea-container">
//           <textarea
//             id="problemStatement"
//             value={formData.problemStatement}
//             onChange={(e) => handleChange(e, 'problemStatement')}
//             maxLength="500"
//             required
//           />
//           <div className="words-left">
//             {calculateRemainingCharacters(formData.problemStatement, 500)} characters left
//           </div>
//         </div>

//         <label htmlFor="problemDescription">Problem Description <span className="requiredIndicator">*</span></label>
//         <div className="textarea-container">
//           <textarea
//             id="problemDescription"
//             value={formData.problemDescription}
//             onChange={(e) => handleChange(e, 'problemDescription')}
//             maxLength="500"
//             required
//           />
//           <div className="words-left">
//             {calculateRemainingCharacters(formData.problemDescription, 500)} characters left
//           </div>
//         </div>

//         <label htmlFor="domain">Select Domain <span className="requiredIndicator">*</span></label>
//         <select
//           id="domain"
//           value={formData.domain}
//           onChange={(e) => handleChange(e, 'domain')}
//           required
//         >
//           <option value="">--Please choose an option--</option>
//           <option value="AI and Data">AI and Data</option>
//           <option value="Cybersecurity">Cybersecurity</option>
//           <option value="Digital Engineering">Digital Engineering</option>
//           <option value="Experience Design">Experience Design</option>
//           <option value="Operations Transformation">Operations Transformation</option>
//         </select>

//         <button type="submit">Submit</button>
//       </form> 
//     </div>
//   );
// }

// export default RegistrationForm;
// RegistrationForm.js
import React, { useState } from 'react';
import '../RegistrationPage/RegistrationPage.css';
import Navbar2 from '../Navbar/Navbar2'; 
import MyParticles from '../Particles/Particles.js';
import { IdeaService } from '../../service/idea.service.js';
import { TeamService } from '../../service/team.service.js';

function RegistrationForm() {
  const initialFormData = {
    teamName: '',
    participants: [{ name: '', email: '' }],
    problemStatement: '',
    problemDescription: '',
    domain: '',
  };
  const [formData, setFormData] = useState(initialFormData);
  const [teamId, setTeamId] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await IdeaService.addIdea(formData);
      console.log("Idea registration successful:", formData);
      await Promise.all(
        formData.participants.map(async (participant) => {
          await TeamService.addParticipantToTeam(teamId, participant);
        })
      );
      alert("Idea registered successfully!");
    } catch (error) {
      console.error("Idea registration failed:", error);
      alert("Idea not registered!");
    }
  };

  const checkTeamNameValidity = async () => {
    try {
      const { id } = await TeamService.addTeam({ teamName: formData.teamName });
      console.log('Team added successfully with ID:', id);
      setTeamId(id);
      alert("Team name is valid!");
    } catch (error) {
      console.error('Error adding team:', error);
      alert("Team name not valid!");
    }
  };

  return (
    <div>
      <MyParticles/>
      <Navbar2/>
      <form onSubmit={handleSubmit} className="registrationForm">
        <h2>Registration Form</h2>

        <label htmlFor="teamName">Team Name <span className="requiredIndicator">*</span></label>
        <div className="teamNameContainer">
          <input
            type="text"
            id="teamName"
            value={formData.teamName}
            onChange={(e) => handleChange(e, 'teamName')}
            required
          />
          <button type="button" onClick={checkTeamNameValidity} className="checkValidityButton">Check Validity</button>
        </div>

        {formData.participants.map((participant, index) => (
          <div key={index}>
            <h3>Participant-{index + 1} {index < 3 ? <span className="requiredIndicator">*</span> : ''}</h3>
            <label htmlFor={`name-${index}`}>Name</label>
            <input
              type="text"
              id={`name-${index}`}
              value={participant.name}
              onChange={(e) => handleChange(e, 'name', index)}
              required={index < 3} // Require name for first three participants
            />

            <label htmlFor={`email-${index}`}>Email</label>
            <input
              type="email"
              id={`email-${index}`}
              value={participant.email}
              onChange={(e) => handleChange(e, 'email', index)}
              required={index < 3} // Require email for first three participants
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

        <button type="submit" className="submitFormButton">Submit</button>
      </form> 
    </div>
  );
}

export default RegistrationForm;

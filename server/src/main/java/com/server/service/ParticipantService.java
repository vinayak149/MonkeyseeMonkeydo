package com.server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.server.bean.Idea;
import com.server.bean.Participant;
import com.server.bean.Team;
import com.server.dto.RegisterPageDTO;
import com.server.repo.ParticipantRepo;

import java.util.List;
import java.util.Optional;

@Service
public class ParticipantService {

	private ParticipantRepo participantRepository;
	private TeamService teamService;
	private IdeaService ideaService;

	@Autowired
	public ParticipantService(ParticipantRepo participantRepository, TeamService teamService, IdeaService ideaService) {
		this.participantRepository = participantRepository;
		this.teamService = teamService;
		this.ideaService = ideaService;
	}

	public List<Participant> getAllParticipants() {
		return participantRepository.findAll();
	}

	public Participant getParticipantById(String id) {
		Optional<Participant> optionalParticipant = participantRepository.findById(id);
		return optionalParticipant.orElse(null);
	}

	public Participant addParticipant(Participant participant) {
		// Save the Idea first to get the generated ID

		Participant savedParticipant = participantRepository.save(participant);

		return savedParticipant;
	}

	public Participant updateParticipant(String id, Participant updatedParticipant) {
		Optional<Participant> optionalExistingParticipant = participantRepository.findById(id);

		if (optionalExistingParticipant.isPresent()) {
			Participant existingParticipant = optionalExistingParticipant.get();

			// Update the fields based on your requirements
			existingParticipant.setTeam(updatedParticipant.getTeam());
			existingParticipant.setName(updatedParticipant.getName());
			existingParticipant.setEmail(updatedParticipant.getEmail());

			// Save the updated Idea (if needed)

			// Save the updated Participant
			return participantRepository.save(existingParticipant);
		}

		return null; // Participant with the given ID not found
	}

	public void deleteParticipant(String id) {
		participantRepository.deleteById(id);
	}

	public void saveParticipant(Participant participant) {
		participantRepository.save(participant);
	}

	public Participant findByEmail(String email) {
		return participantRepository.findByEmail(email);
	}

	public Participant findByUsernameAndEmail(String username, String email) {
		return participantRepository.findByNameAndEmail(username, email);
	}

	public String registerIdeaService(RegisterPageDTO registerPageDTO) {
		Team existingTeam = teamService.findByTeamName(registerPageDTO.getTeamName());
		if (registerPageDTO.getTeamName() == null || registerPageDTO.getTeamName().isEmpty()) {
			return "Team name should not be empty!!";
		} else if (existingTeam != null) {
			return "Team already exist";

		}

		try {
			// Save the team to the database
			Team team = new Team();
			team.setTeamName(registerPageDTO.getTeamName());
			Team savedTeam = teamService.saveTeam(team);
			String teamId = savedTeam.getId();
			// Check if the participant already exists by username and email
			List<Participant> participants = registerPageDTO.getParticipant();
			System.out.println(participants);
			for (Participant participant : participants) {
				Participant existingParticipant = findByEmail(participant.getEmail());
				System.out.println(existingParticipant.toString());
				if (existingParticipant != null) {
					// Participant exists, add them to the team
					existingParticipant.setName(participant.getName());
					existingParticipant.setTeam(savedTeam);
					team.getParticipants().add(existingParticipant);
					// Update both the participant and the team
					updateParticipant(existingParticipant.getId(), existingParticipant);
					teamService.updateTeam(teamId, savedTeam);

				} else {
					// Participant not found, you can choose to handle this case
					return "participant not found";
				}
				}
				Idea idea = new Idea();
				idea.setTitle(registerPageDTO.getTitle());
				idea.setDescription(registerPageDTO.getDescription());
				idea.setDomain(registerPageDTO.getDomain());
				idea.setTeam(team);
				Idea savedIdea = ideaService.addIdea(idea);

				// Assign the idea to the team
				team.setIdea(savedIdea);
				idea.setTeam(team);
				ideaService.updateIdea(idea.getId(), idea);
				teamService.updateTeam(teamId, team);
				return "Team Registered Successfully";
			}catch(Exception e){
				return "";
	}
}
}

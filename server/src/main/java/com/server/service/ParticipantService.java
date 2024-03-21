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

    private final ParticipantRepo participantRepository;
    private final TeamService teamService;
    private final IdeaService ideaService;

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
        return participantRepository.findById(id).orElse(null);
    }

    public Participant addParticipant(Participant participant) {
        return participantRepository.save(participant);
    }

    public Participant updateParticipant(String id, Participant updatedParticipant) {
        Optional<Participant> optionalExistingParticipant = participantRepository.findById(id);
        return optionalExistingParticipant.map(existingParticipant -> {
            existingParticipant.setTeam(updatedParticipant.getTeam());
            existingParticipant.setName(updatedParticipant.getName());
            existingParticipant.setEmail(updatedParticipant.getEmail());
            return participantRepository.save(existingParticipant);
        }).orElse(null);
    }

    public void deleteParticipant(String id) {
        participantRepository.deleteById(id);
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
            return "Team already exists";
        }

        try {
            Team team = new Team();
            team.setTeamName(registerPageDTO.getTeamName());
            Team savedTeam = teamService.saveTeam(team);

            List<Participant> participants = registerPageDTO.getParticipant();
            for (Participant participant : participants) {
                Participant existingParticipant = findByEmail(participant.getEmail());
                if (existingParticipant != null) {
                    existingParticipant.setName(participant.getName());
                    existingParticipant.setTeam(savedTeam);
                    savedTeam.getParticipants().add(existingParticipant);
                    updateParticipant(existingParticipant.getId(), existingParticipant);
                    teamService.updateTeam(savedTeam.getId(), savedTeam);
                } else {
                    return "Participant not found";
                }
            }

            Idea idea = new Idea();
            idea.setTitle(registerPageDTO.getTitle());
            idea.setDescription(registerPageDTO.getDescription());
            idea.setDomain(registerPageDTO.getDomain());
            idea.setTeam(savedTeam);
            Idea savedIdea = ideaService.addIdea(idea);

            savedTeam.setIdea(savedIdea);
            idea.setTeam(savedTeam);
            ideaService.updateIdea(savedIdea.getId(), idea);
            teamService.updateTeam(savedTeam.getId(), savedTeam);

            return "Team Registered Successfully";
        } catch (Exception e) {
            e.printStackTrace();
            return "An error occurred while registering the team";
        }
    }
}

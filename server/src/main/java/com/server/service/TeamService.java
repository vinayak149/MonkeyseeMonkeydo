package com.server.service;

import com.server.bean.Idea;
import com.server.bean.Team;
import com.server.repo.TeamRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TeamService {

	private TeamRepo teamRepo;

	@Autowired
	public TeamService(TeamRepo teamRepo) {
		this.teamRepo = teamRepo;
	}

	public List<String> getAllTeamNames() {
		List<Team> teams = teamRepo.findAll();
		List<String> teamNames = new ArrayList<>();
		for (Team team : teams) {
			teamNames.add(team.getTeamName());
		}
		return teamNames;
	}

	public Team addTeam(Team team) {
		return teamRepo.save(team);
	}

	public void updateTeam(String teamId, Team updatedTeam) {
		Optional<Team> optionalExistingTeam = teamRepo.findById(teamId);

		if (optionalExistingTeam.isPresent()) {
			Team existingTeam = optionalExistingTeam.get();

			// Update the fields based on your requirements
			existingTeam.setTeamName(updatedTeam.getTeamName());
			existingTeam.setIdea(updatedTeam.getIdea());

			// Update the participants
			existingTeam.setParticipants(updatedTeam.getParticipants());

			// Save the updated Team
			teamRepo.save(existingTeam);
		}
	}

	public void deleteTeam(String teamId) {
		teamRepo.deleteById(teamId);
	}

	public Team getTeamById(String teamId) {
		Optional<Team> optionalTeam = teamRepo.findById(teamId);
		return optionalTeam.orElse(null);
	}

	public Team saveTeam(Team team) {
		return teamRepo.save(team);
	}

	public Team getTeamByParticipant(String participantId) {
		return teamRepo.findbyParticipantId(participantId);
	}

	public List<Team> getAllTeams() {
		// TODO Auto-generated method stub
		return teamRepo.findAll();
	
	}

	public Team findByTeamName(String teamName) {
		return teamRepo.findByTeamName(teamName);
	}
	public String addParticipantToTeam(String participantId,String teamId) {
		
		return null;
	}
	public List<Team> getTeamByPanelist(String panelistId) {
		List<Team> teams = teamRepo.findByPanelistId(panelistId);
		return teams;
	}
	public List<Team> getTop3Teams() {
        return teamRepo.findAll().stream()
                .filter(team -> team.getIdea() != null) // Filter out teams without an idea
                .sorted(Comparator.comparingInt(team -> ((Team) team).getIdea().getFinalScore()).reversed()) // Sort by final score of the associated idea
                .limit(3) // Limit to the top 3 teams
                .collect(Collectors.toList());
    }


}
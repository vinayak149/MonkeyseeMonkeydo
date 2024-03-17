package com.server.controller;

import com.server.bean.Idea;
import com.server.bean.Participant;
import com.server.bean.Team;
import com.server.repo.TeamRepo;
import com.server.service.IdeaService;
import com.server.service.ParticipantService;
import com.server.service.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/teams")
public class TeamController {

	private ParticipantService participantService;
	private IdeaService ideaService;
	private TeamService teamService;

	@Autowired
	public TeamController(TeamService teamService, ParticipantService participantService, IdeaService ideaService) {
		this.teamService = teamService;
		this.participantService = participantService;
		this.ideaService = ideaService;
	}

	@GetMapping("/getTeambyPanelist/{id}")
	public List<Team> getTeambyPanelist(@PathVariable String id) {
		return teamService.getTeamByPanelist(id);
	}

	@PostMapping("/add-participant/{teamId}")
	public ResponseEntity<String> addParticipantToTeam(@PathVariable String teamId,
			@RequestBody Participant participant) {
		try {
			Team team = teamService.getTeamById(teamId);
			if (team != null) {
				// Check if the participant already exists by username and email
				Participant existingParticipant = participantService.findByEmail(participant.getEmail());

				if (existingParticipant != null) {
					// Participant exists, add them to the team
					existingParticipant.setTeam(team);
					team.getParticipants().add(existingParticipant);
					// Update both the participant and the team
					participantService.updateParticipant(existingParticipant.getId(), existingParticipant);
					teamService.updateTeam(teamId, team);

					return ResponseEntity.ok("Participant added to the team successfully");
				} else {
					// Participant not found, you can choose to handle this case
					return ResponseEntity.notFound().build();
				}
			} else {
				return ResponseEntity.notFound().build();
			}
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("An error occurred while adding the participant to the team");
		}
	}
	@GetMapping("/getTeambyParticipant/{participantId}")
    public ResponseEntity<Team> getTeamByParticipant(@PathVariable String participantId) {
        Team team = teamService.getTeamByParticipant(participantId);
        if (team != null) {
            return ResponseEntity.ok(team);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
	@PostMapping("/assign-idea/{teamId}")
	public ResponseEntity<String> assignIdeaToTeam(@PathVariable String teamId, @RequestBody Idea idea) {
		try {
			Team team = teamService.getTeamById(teamId);

			if (team != null) {
				// Check if the team already has an idea assigned
				if (team.getIdea() != null) {
					return ResponseEntity.badRequest().body("Team already has an idea assigned");
				}
				idea.setTeam(team);
				// Assuming you have logic to create or retrieve the idea
				Idea savedIdea = ideaService.addIdea(idea);

				// Assign the idea to the team
				team.setIdea(savedIdea);
				idea.setTeam(team);
				ideaService.updateIdea(idea.getId(), idea);
				teamService.updateTeam(teamId, team);
				return ResponseEntity.ok("Idea assigned to the team successfully");
			} else {
				return ResponseEntity.notFound().build();
			}
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("An error occurred while assigning the idea to the team");
		}
	}
	@GetMapping("/getTeambyParticipant/{participantId}")
    public ResponseEntity<Team> getTeamByParticipant(@PathVariable String participantId) {
        Team team = teamService.getTeamByParticipant(participantId);
        if (team != null) {
            return ResponseEntity.ok(team);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
	
	@PostMapping("/add")
	public ResponseEntity<String> addTeam(@RequestBody Team team) {
		Team existingTeam = teamService.findByTeamName(team.getTeamName());
		if (team.getTeamName() == null || team.getTeamName().isEmpty()) {
			return ResponseEntity.badRequest().body("Team name should not be empty!!");
		} else if (existingTeam != null) {
			return ResponseEntity.badRequest().body("Team already exist");

		}

		try {
			// Save the team to the database
			Team savedTeam = teamService.saveTeam(team);

			return ResponseEntity.ok(savedTeam.getId());
		} catch (Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("An error occurred while adding the team");
		}
	}

	@GetMapping("/allteamNames")
	public List<String> getallTeamNames() {
		return teamService.getAllTeamNames();
	}

	@GetMapping("/teamcount")
	public Integer getCount() {
		return teamService.getAllTeamNames().size();
	}

	@GetMapping("/all")
	public List<Team> getallTeams() {
		return teamService.getAllTeams();

	}

	@PutMapping("/edit")
	public ResponseEntity<String> updateTeamName(@RequestBody Map<String, String> teamNames) {
		Team savedTeam = teamService.findByTeamName(teamNames.get("existingTeamName"));
		savedTeam.setTeamName(teamNames.get("updatedTeamName"));
		teamService.updateTeam(savedTeam.getId(), savedTeam);
		return ResponseEntity.ok("Team name has been Changed Successfully!!");
	}

}
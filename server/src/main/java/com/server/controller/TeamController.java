package com.server.controller;

import com.server.bean.Idea;
import com.server.bean.Participant;
import com.server.bean.Team;
import com.server.service.IdeaService;
import com.server.service.ParticipantService;
import com.server.service.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/teams")
public class TeamController {

    
    private  ParticipantService participantService;
    private  IdeaService ideaService;
    private TeamService teamService;

    @Autowired
    public TeamController(TeamService teamService, ParticipantService participantService, IdeaService ideaService) {
        this.teamService = teamService;
        this.participantService = participantService;
        this.ideaService = ideaService;
    }

    @PostMapping("/add-participant/{teamId}")
    public ResponseEntity<String> addParticipantToTeam(@PathVariable String teamId, @RequestBody Participant participant) {
        try {
            Team team = teamService.getTeamById(teamId);
            if (team != null) {
                // Check if the participant already exists by username and email
                Participant existingParticipant = participantService.findByEmail(participant.getEmail());

                if (existingParticipant != null) {
                    // Participant exists, add them to the team
                    existingParticipant.setTeam(team);
                    team.getParticipants().add(existingParticipant);
                    teamService.updateTeam(teamId, team);
                    participantService.updateParticipant(existingParticipant.getId(),existingParticipant);

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




    @PostMapping("/assign-idea/{teamId}")
    public ResponseEntity<String> assignIdeaToTeam(@PathVariable String teamId, @RequestBody Idea idea) {
        try {
            Team team = teamService.getTeamById(teamId);

            if (team != null) {
                // Check if the team already has an idea assigned
                if (team.getIdea() != null) {
                    return ResponseEntity.badRequest().body("Team already has an idea assigned");
                }

                // Assuming you have logic to create or retrieve the idea
                Idea savedIdea = ideaService.addIdea(idea);

                // Assign the idea to the team
                team.setIdea(savedIdea);

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

    @PostMapping("/add")
    public ResponseEntity<String> addTeam(@RequestBody Team team) {
        if (team.getTeamName() == null || team.getTeamName().isEmpty()) {
            return ResponseEntity.badRequest().body("Team name should not be empty!!");
        }

        try {
            // Save the team to the database
            Team savedTeam = teamService.saveTeam(team);

            return ResponseEntity.ok("Team added successfully with ID: " + savedTeam.getId());
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while adding the team");
        }
    }






    
   
}

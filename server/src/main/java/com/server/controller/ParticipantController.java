package com.server.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.server.bean.Idea;
import com.server.bean.Participant;
import com.server.bean.Team;
import com.server.dto.DashboardDTO;
import com.server.dto.RegisterPageDTO;
import com.server.service.ParticipantService;
import com.server.service.TeamService;
 
 
@RestController
@RequestMapping("/participants")
public class ParticipantController {
	
	@Autowired
    private final ParticipantService participantService;
	
	@Autowired
	private final TeamService teamService;
 
    public ParticipantController(ParticipantService participantService,TeamService teamService) {
        this.participantService = participantService;
        this.teamService = teamService;
    }
 
    @GetMapping
    public ResponseEntity<List<Participant>> getAllParticipants() {
        List<Participant> participants = participantService.getAllParticipants();
        return new ResponseEntity<>(participants, HttpStatus.OK);
    }
 
    @GetMapping("/{id}")
    public ResponseEntity<Participant> getParticipantById(@PathVariable String id) {
        Participant participant = participantService.getParticipantById(id);
        return new ResponseEntity<>(participant, HttpStatus.OK);
    }
 
    @PostMapping("/add")
    public ResponseEntity<Participant> addParticipant(@RequestBody Participant participant) {
        Participant addedParticipant = participantService.addParticipant(participant);
        return new ResponseEntity<>(addedParticipant, HttpStatus.CREATED);
    }
 
    @PutMapping("/{id}")
    public ResponseEntity<Participant> updateParticipant(@PathVariable String id, @RequestBody Participant participant) {
        Participant updatedParticipant = participantService.updateParticipant(id, participant);
        return new ResponseEntity<>(updatedParticipant, HttpStatus.OK);
    }
 
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteParticipant(@PathVariable String id) {
        participantService.deleteParticipant(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
    @GetMapping("/dashboard/{id}/progress")
    public ResponseEntity<DashboardDTO> dashBoardProgress(@PathVariable String id){
    	DashboardDTO dashboard =  new DashboardDTO();
    	try {
    	Participant participant = participantService.findByEmail(id);
    	Team team = participant.getTeam();
    	Idea idea = team.getIdea();
    	Integer count = teamService.getAllTeamNames().size();
    	dashboard.setTeamName(team.getTeamName());
    	dashboard.setTotalCompetitors(count);
    	Integer progress=0;
    	if(idea.getTitle()!=null) {
    		progress =  40;
    			if(idea.getFinalScore()>0) {
    				progress = 60;
    		}
    	}
    	dashboard.setProjectStatus(idea.getStatus());
    	List<Participant> participants = team.getParticipants();
    	ArrayList<String> teamMembers = new ArrayList<String>();
    	for(Participant participant1 :participants) {
    		teamMembers.add(participant1.getName());
    	}
    	dashboard.setTeamMembers(teamMembers);
    	dashboard.setProjectName(idea.getTitle());
    	dashboard.setProjectDescription(idea.getDescription());
    	dashboard.setProjectCompletionPercentage(progress);
    	return new ResponseEntity<DashboardDTO>(dashboard,HttpStatus.OK);
    	}
    	catch(Exception e) {
    		return new ResponseEntity<DashboardDTO>(dashboard,HttpStatus.BAD_REQUEST);
    	}
    }
    @PostMapping("/registerIdea")
    public ResponseEntity<String> registerIdea(@RequestBody RegisterPageDTO registerPageDTO){
    	String res = participantService.registerIdeaService(registerPageDTO);
    	return new ResponseEntity<String>(res,HttpStatus.OK);
    }
}

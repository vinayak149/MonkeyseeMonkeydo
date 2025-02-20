package com.server.controller;

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
import com.server.service.ParticipantService;
 
 
@RestController
@RequestMapping("/participants")
public class ParticipantController {
	
	@Autowired
    private final ParticipantService participantService;
 
    public ParticipantController(ParticipantService participantService) {
        this.participantService = participantService;
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
    public ResponseEntity<String> dashBoardProgress(@PathVariable String id){
    	try {
    	Participant participant = participantService.findByEmail(id);
    	Team team = participant.getTeam();
    	Idea idea = team.getIdea();
    	String progress="0";
    	if(idea.getTitle()!=null) {
    		progress =  "40";
    			if(idea.getScore()>0) {
    				progress = "60";
    		}
    	}
    	return new ResponseEntity<String>(progress,HttpStatus.OK);
    	}
    	catch(Exception e) {
    		return new ResponseEntity<String>(e.toString(),HttpStatus.BAD_REQUEST);
    	}
    }
}

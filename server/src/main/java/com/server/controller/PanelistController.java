package com.server.controller;

import com.server.bean.Idea;
import com.server.bean.Panelist;
import com.server.service.IdeaService;
import com.server.service.PanelistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/panelists")
public class PanelistController {
	@Autowired
    private PanelistService panelistService;
    private  IdeaService ideaService;

    
    public PanelistController(PanelistService panelistService, IdeaService ideaService ) {
        this.panelistService = panelistService;
        this.ideaService = ideaService;
    }

    @GetMapping("/all")
    public List<Panelist> getAllPanelists() {
        return panelistService.getAllPanelists();
    }
    

    @GetMapping("/{panelistId}")
    public ResponseEntity<Panelist> getPanelistById(@PathVariable String panelistId) {
        Panelist panelist = panelistService.getPanelistById(panelistId);
        if (panelist != null) {
            return ResponseEntity.ok(panelist);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    
    
    
    @PostMapping("/add")
    public ResponseEntity<String> addPanelist(@RequestBody Panelist panelist) {
        if (panelist != null) {
            panelistService.addPanelist(panelist);
            return ResponseEntity.ok("Panelist added successfully");
        } else {
            return ResponseEntity.badRequest().body("Invalid panelist data");
        }
    }

    @PostMapping("/{panelistId}/give-review/{ideaId}")
    public ResponseEntity<String> giveReview(
            @PathVariable String panelistId,
            @PathVariable String ideaId,
            @RequestBody Map<String, String> reviewRequest) {

        String suggestion = reviewRequest.get("suggestion");
        String status = reviewRequest.get("status");

        if (suggestion != null && status != null) {
            Panelist panelist = panelistService.getPanelistById(panelistId);
            Idea idea = ideaService.getIdeaById(ideaId);

            if (panelist != null && idea != null) {
                // Save the Idea first if it doesn't have a valid ID
                if (idea.getId() == null) {
                    ideaService.addIdea(idea);
                }
                idea.setReviewedBy(panelist.getName());
                ideaService.updateIdea(ideaId, idea);
                
                ideaService.updateSuggestionAndStatus(ideaId, suggestion, status);

                // Save the Panelist with the updated Idea

                return ResponseEntity.ok("Review given successfully");
            } else {
                return ResponseEntity.badRequest().body("Invalid panelist or idea ID");
            }
        } else {
            return ResponseEntity.badRequest().body("Suggestion and Status are required in the request payload");
        }
    }












}

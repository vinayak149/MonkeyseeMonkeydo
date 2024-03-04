package com.server.controller;

import com.server.bean.Idea;
import com.server.bean.Judge;
import com.server.service.IdeaService;
import com.server.service.JudgeService;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/judge")
public class JudgeController {

    private final IdeaService ideaService;
    private JudgeService judgeService;

    @Autowired
    public JudgeController(IdeaService ideaService,JudgeService judgeService) {
        this.ideaService = ideaService;
        this.judgeService=judgeService;
    }
    
    @GetMapping("/all")
    public List<Judge> getAllJudges()
    {
    	return judgeService.getAllJudges();
    }
 // Create a new judge
    @PostMapping("/add")
    public ResponseEntity<Judge> addJudge(@RequestBody Judge judge) {
        Judge addedJudge = judgeService.addJudge(judge);
        return new ResponseEntity<>(addedJudge, HttpStatus.CREATED);
    }

    // Update an existing judge
    @PutMapping("/update/{judgeId}")
    public ResponseEntity<Judge> updateJudge(
            @PathVariable String judgeId,
            @RequestBody Judge updatedJudge) {
        Judge judge = judgeService.updateJudge(judgeId, updatedJudge);

        if (judge != null) {
            return new ResponseEntity<>(judge, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Delete a judge by ID
    @DeleteMapping("/delete/{judgeId}")
    public ResponseEntity<Void> deleteJudge(@PathVariable String judgeId) {
        judgeService.deleteJudge(judgeId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
    
    
    @PutMapping("/giverating/{ideaId}")
    public ResponseEntity<String> updateRatingAndFeedback(
            @PathVariable String ideaId,
            @RequestBody Map<String, Object> requestBody) {

        if (requestBody.containsKey("rating") && requestBody.containsKey("feedback")) {
            double rating = (double) requestBody.get("rating");
            String feedback = (String) requestBody.get("feedback");

            ideaService.updateRatingAndFeedback(ideaId, rating, feedback);
            return ResponseEntity.ok("Rating and Feedback updated successfully");
        } else {
            return ResponseEntity.badRequest().body("Rating and Feedback are required in the request payload");
        }
    }







   
}

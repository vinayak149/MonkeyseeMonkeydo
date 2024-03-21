package com.server.controller;

import com.server.bean.Idea;
import com.server.bean.Judge;
import com.server.bean.Score;
import com.server.service.IdeaService;
import com.server.service.JudgeService;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/judge")
public class JudgeController {

	private IdeaService ideaService;
	private JudgeService judgeService;

	@Autowired
	public JudgeController(IdeaService ideaService, JudgeService judgeService) {
		this.ideaService = ideaService;
		this.judgeService = judgeService;
	}

	@GetMapping("/all")
	public List<Judge> getAllJudges() {
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
	public ResponseEntity<Judge> updateJudge(@PathVariable String judgeId, @RequestBody Judge updatedJudge) {
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

	// for submit the rating of the Idea by the judge
		@PutMapping("{judgeId}/giverating/{ideaId}")
		public ResponseEntity<String> updateRatingAndFeedback(@PathVariable String judgeId, @PathVariable String ideaId,
				@RequestBody Map<String, Object> requestBody) {
	 
			if ( requestBody.containsKey("feedback")
					&& requestBody.containsKey("workFlow") && requestBody.containsKey("qualityOfWork")
					&& requestBody.containsKey("userInterface")) {
	 
				Object feedbackObject = requestBody.get("feedback");
				String workFlowObject = (String) requestBody.get("workFlow");
				String qualityOfWorkObject = (String) requestBody.get("qualityOfWork");
				String userInterfaceObject = (String) requestBody.get("userInterface");
	 
				if ( feedbackObject instanceof String) {
	 
					String feedback = (String) feedbackObject;
					int workFlow = Integer.parseInt(workFlowObject);
					int qualityOfWork = Integer.parseInt(qualityOfWorkObject);
					int userInterface = Integer.parseInt(userInterfaceObject);
	 
					Optional<Judge> judgeOptional = judgeService.getJudgeById(judgeId);
					Idea idea = ideaService.getIdeaById(ideaId);
					Score score = new Score();
	 
					if (judgeOptional.isPresent() && idea != null) {
						Judge judge = judgeOptional.get();
	 
						// Set the ratedBy field in the Idea
						score.setRatedBy(judge.getId());
	 
						// Update the Idea with the new rating, feedback, and additional fields
						score.setWorkFlow(workFlow);
						score.setQualityofWork(qualityOfWork);
						score.setUserInterface(userInterface);
						score.setFeedback(feedback);
						score.setScore((score.getQualityofWork() + score.getUserInterface() + score.getWorkFlow()));
						if(idea.getScores()==null) {
							List<Score> scores = new ArrayList<Score>();
							scores.add(score);
							idea.setScores(scores);
						}
						else {
							idea.getScores().add(score);
						}
						idea.setFinalScore(idea.getFinalScore()+score.getScore());
						ideaService.updateIdea(ideaId, idea);
	 
						return ResponseEntity.ok("Rating, Feedback, and additional fields updated successfully");
					} else {
						return ResponseEntity.badRequest().body("Invalid judge or idea ID");
					}
				} else {
					return ResponseEntity.badRequest().body("Invalid types for rating, feedback, or additional fields");
				}
			} else {
				return ResponseEntity.badRequest()
						.body("Rating, Feedback, and additional fields are required in the request payload");
			}
		}

}
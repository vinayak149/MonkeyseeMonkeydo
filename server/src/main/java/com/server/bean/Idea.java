package com.server.bean;
 
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
 
@Document(collection = "ideas")
public class Idea {
 
	@Id
	private String id;
	private String title;
	private String description;
	private String domain;
	private String implementation;
	private String suggestion;
	private String status;
	private String reviewedBy;
	private List<Score> scores;
	private int finalScore;
	@DBRef
	private Team team;
	public Idea() {}
	public Idea(String title, String description) {
		this.title = title;
		this.description = description;
	}
	
	public Idea(String title, String description, String domain, String implementation,
			String suggestion, String status, String reviewedBy, List<Score> scores, int finalScore, Team team) {
		super();
		this.title = title;
		this.description = description;
		this.domain = domain;
		this.implementation = implementation;
		this.suggestion = suggestion;
		this.status = status;
		this.reviewedBy = reviewedBy;
		this.scores = scores;
		this.finalScore = finalScore;
		this.team = team;
	}

	public List<Score> getScores() {
		return scores;
	}

	public void setScores(List<Score> scores) {
		this.scores = scores;
	}

	public int getFinalScore() {
		return finalScore;
	}

	public void setFinalScore(int finalScore) {
		this.finalScore = finalScore;
	}
	
	public Team getTeam() {
		return team;
	}
 
	public void setTeam(Team team) {
		this.team = team;
	}
 
	public String getId() {
		return id;
	}
 
	public String getTitle() {
		return title;
	}
 
	public void setTitle(String title) {
		this.title = title;
	}
 
	public String getDescription() {
		return description;
	}
 
	public void setDescription(String description) {
		this.description = description;
	}
 
 
	public void setId(String id) {
		this.id = id;
	}
 
	public String getSuggestion() {
		return suggestion;
	}
 
	public void setSuggestion(String suggestion) {
		this.suggestion = suggestion;
	}
 
	public String getStatus() {
		return status;
	}
 
	public void setStatus(String status) {
		this.status = status;
	}
 
	public void updateSuggestionAndStatus(String newSuggestion, String newStatus) {
		this.suggestion = newSuggestion;
		this.status = newStatus;
	}

 
	public String getReviewedBy() {
		return reviewedBy;
	}
 
	public void setReviewedBy(String reviewedBy) {
		this.reviewedBy = reviewedBy;
	}
	
	public String getDomain() {
		return domain;
	}
 
	public void setDomain(String domain) {
		this.domain = domain;
	}
	
	public String getImplementation() {
		return implementation;
	}
 
	public void setImplementation(String implementation) {
		this.implementation = implementation;
	}
 
	
 
}
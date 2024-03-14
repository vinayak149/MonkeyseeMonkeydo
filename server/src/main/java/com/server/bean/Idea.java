package com.server.bean;
 
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
	private String feedback;
	private String suggestion;
	private String status;
	private String ratedBy;
	private String reviewedBy;
	private int workFlow;
	private int qualityofWork;
	private int userInterface;
	private int score;
	@DBRef
	private Team team;
	
 
	public Team getTeam() {
		return team;
	}
 
	public void setTeam(Team team) {
		this.team = team;
	}
 
	public int getScore() {
		return score;
	}
 
	public void setScore(int score) {
		this.score = score;
	}
 
	public Idea(String title, String description) {
		this.title = title;
		this.description = description;
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
 
 
 
	
	public String getFeedback() {
		return feedback;
	}
 
	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}
 
	public void setId(String id) {
		this.id = id;
	}
 
	public void updateFeedback( String newFeedback) {
		this.feedback = newFeedback;
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
 
	public String getRatedBy() {
		return ratedBy;
	}
 
	public void setRatedBy(String ratedBy) {
		this.ratedBy = ratedBy;
	}
 
	public String getReviewedBy() {
		return reviewedBy;
	}
 
	public void setReviewedBy(String reviewedBy) {
		this.reviewedBy = reviewedBy;
	}
 
	public int getWorkFlow() {
		return workFlow;
	}
 
	public void setWorkFlow(int workFlow) {
		this.workFlow = workFlow;
	}
 
	public int getQualityofWork() {
		return qualityofWork;
	}
 
	public void setQualityofWork(int qualityofWork) {
		this.qualityofWork = qualityofWork;
	}
 
	public int getUserInterface() {
		return userInterface;
	}
 
	public void setUserInterface(int userInterface) {
		this.userInterface = userInterface;
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
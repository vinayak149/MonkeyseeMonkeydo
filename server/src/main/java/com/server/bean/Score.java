package com.server.bean;

public class Score {
	private int workFlow;
	private int qualityofWork;
	private int userInterface;
	private int score;
	private String ratedBy;
	private String feedback;

	public Score() {
		
	}
	public String getFeedback() {
		return feedback;
	}
	public void setFeedback(String feedback) {
		this.feedback = feedback;
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
	public int getScore() {
		return score;
	}
	public void setScore(int score) {
		this.score = score;
	}
	public String getRatedBy() {
		return ratedBy;
	}
	public void setRatedBy(String ratedBy) {
		this.ratedBy = ratedBy;
	}
	
}

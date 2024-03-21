package com.server.dto;

public class WinnerDTO {
    private String firstPlaceTeam;
    private int firstPlaceScore;
    
    private String secondPlaceTeam;
    private int secondPlaceScore;
    
    private String thirdPlaceTeam;
    private int thirdPlaceScore;
    
    
    
	public WinnerDTO(String firstPlaceTeam, int firstPlaceScore, String secondPlaceTeam, int secondPlaceScore,
			String thirdPlaceTeam, int thirdPlaceScore) {
		super();
		this.firstPlaceTeam = firstPlaceTeam;
		this.firstPlaceScore = firstPlaceScore;
		this.secondPlaceTeam = secondPlaceTeam;
		this.secondPlaceScore = secondPlaceScore;
		this.thirdPlaceTeam = thirdPlaceTeam;
		this.thirdPlaceScore = thirdPlaceScore;
	}
	public String getFirstPlaceTeam() {
		return firstPlaceTeam;
	}
	public void setFirstPlaceTeam(String firstPlaceTeam) {
		this.firstPlaceTeam = firstPlaceTeam;
	}
	public int getFirstPlaceScore() {
		return firstPlaceScore;
	}
	public void setFirstPlaceScore(int firstPlaceScore) {
		this.firstPlaceScore = firstPlaceScore;
	}
	public String getSecondPlaceTeam() {
		return secondPlaceTeam;
	}
	public void setSecondPlaceTeam(String secondPlaceTeam) {
		this.secondPlaceTeam = secondPlaceTeam;
	}
	public int getSecondPlaceScore() {
		return secondPlaceScore;
	}
	public void setSecondPlaceScore(int secondPlaceScore) {
		this.secondPlaceScore = secondPlaceScore;
	}
	public String getThirdPlaceTeam() {
		return thirdPlaceTeam;
	}
	public void setThirdPlaceTeam(String thirdPlaceTeam) {
		this.thirdPlaceTeam = thirdPlaceTeam;
	}
	public int getThirdPlaceScore() {
		return thirdPlaceScore;
	}
	public void setThirdPlaceScore(int thirdPlaceScore) {
		this.thirdPlaceScore = thirdPlaceScore;
	}
    

    // Constructors, getters, and setters...
}

package com.server.dto;

import java.util.List;

public class DashboardDTO {
	private String teamName;
	private Integer totalCompetitors;
	private String hackathonTimeRemaining;
	private String projectSubmissionTimeRemaining;
	private String projectStatus;
	private List<String> teamMembers;
	private String projectName;
	private String projectDescription;
	private Integer projectCompletionPercentage;
	public DashboardDTO() {
		
	}

	public DashboardDTO(String teamName, Integer totalCompetitors, String hackathonTimeRemaining,
			String projectSubmissionTimeRemaining, String projectStatus, List<String> teamMembers, String projectName,
			String projectDescription, Integer projectCompletionPercentage) {
		super();
		this.teamName = teamName;
		this.totalCompetitors = totalCompetitors;
		this.hackathonTimeRemaining = hackathonTimeRemaining;
		this.projectSubmissionTimeRemaining = projectSubmissionTimeRemaining;
		this.projectStatus = projectStatus;
		this.teamMembers = teamMembers;
		this.projectName = projectName;
		this.projectDescription = projectDescription;
		this.projectCompletionPercentage = projectCompletionPercentage;
	}

	public String getTeamName() {
		return teamName;
	}

	public void setTeamName(String teamName) {
		this.teamName = teamName;
	}

	public Integer getTotalCompetitors() {
		return totalCompetitors;
	}

	public void setTotalCompetitors(Integer totalCompetitors) {
		this.totalCompetitors = totalCompetitors;
	}

	public String getHackathonTimeRemaining() {
		return hackathonTimeRemaining;
	}

	public void setHackathonTimeRemaining(String hackathonTimeRemaining) {
		this.hackathonTimeRemaining = hackathonTimeRemaining;
	}

	public String getProjectSubmissionTimeRemaining() {
		return projectSubmissionTimeRemaining;
	}

	public void setProjectSubmissionTimeRemaining(String projectSubmissionTimeRemaining) {
		this.projectSubmissionTimeRemaining = projectSubmissionTimeRemaining;
	}

	public String getProjectStatus() {
		return projectStatus;
	}

	public void setProjectStatus(String projectStatus) {
		this.projectStatus = projectStatus;
	}

	public List<String> getTeamMembers() {
		return teamMembers;
	}

	public void setTeamMembers(List<String> teamMembers) {
		this.teamMembers = teamMembers;
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public String getProjectDescription() {
		return projectDescription;
	}

	public void setProjectDescription(String projectDescription) {
		this.projectDescription = projectDescription;
	}

	public Integer getProjectCompletionPercentage() {
		return projectCompletionPercentage;
	}

	public void setProjectCompletionPercentage(Integer projectCompletionPercentage) {
		this.projectCompletionPercentage = projectCompletionPercentage;
	}

}

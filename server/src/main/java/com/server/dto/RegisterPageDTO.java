package com.server.dto;

import java.util.List;

import com.server.bean.Participant;

public class RegisterPageDTO {
	private String teamName;
	private List<Participant> participants;
	private String title;
	private String description;
	private String domain;
	
	public RegisterPageDTO(String teamName, List<Participant> participants, String title, String description,
			String domain) {
		super();
		this.teamName = teamName;
		this.participants = participants;
		this.title = title;
		this.description = description;
		this.domain = domain;
	}

	public String getTeamName() {
		return teamName;
	}

	public void setTeamName(String teamName) {
		this.teamName = teamName;
	}

	public List<Participant> getParticipant() {
		return participants;
	}

	public void setParticipant(List<Participant> participant) {
		this.participants = participant;
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

	public String getDomain() {
		return domain;
	}

	public void setDomain(String domain) {
		this.domain = domain;
	}
	
	
}

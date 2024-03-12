package com.server.bean;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "teams")
public class Team {
	@Id
    private String id;

    private String teamName;

   
    @DBRef
    private List<Participant> participants =new ArrayList<>(4);


    @DBRef
    private Idea idea;
    
    @DBRef
    private Panelist panelist;

	public Team(String id, String teamName, List<Participant> participants, Idea idea,Panelist panelist) {
		super();
		this.id = id;
		this.teamName = teamName;
		this.participants = participants;
		this.idea = idea;
		this.panelist = panelist;
	}
	public Team() {
        this.participants = new ArrayList<>();
    }

	public Panelist getPanelist() {
		return panelist;
	}
	public void setPanelist(Panelist panelist) {
		this.panelist = panelist;
	}
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTeamName() {
		return teamName;
	}

	public void setTeamName(String teamName) {
		this.teamName = teamName;
	}

	public ArrayList<Participant> getParticipants() {
		return (ArrayList<Participant>) participants;
	}

	public void setParticipants(List<Participant> participants) {
		this.participants = participants;
	}

	public Idea getIdea() {
		return idea;
	}

	public void setIdea(Idea idea) {
		this.idea = idea;
	}
    

}

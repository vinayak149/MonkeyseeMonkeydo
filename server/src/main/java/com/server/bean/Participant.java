package com.server.bean;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "participants")
public class Participant {

    @Id
    private String id;

    private String name;
    private String email;
    
    
    @DBRef
    private Team team;
    
    public Participant()
    {
    	
    }

    public Participant(String name, String email,  Team team) {
    	
        this.name = name;
        this.email = email;
        this.team = team;
        
    }
    public Participant(String name, String email) {
        this.name = name;
        this.email = email;
        
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    

    public Team getTeam() {
        return team;
    }

    public void setTeam(Team team) {
        this.team = team;
    }
}

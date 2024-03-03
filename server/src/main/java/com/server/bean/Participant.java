package com.server.bean;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
 
@Document(collection = "participants")
public class Participant {
    @Id
    private String id;

    private String name;
    private String email;
    private String ideaTitle;
    private String ideaDescription;
    private String userRole; // New field for user role

    public Participant(String id, String name, String email, String ideaTitle, String ideaDescription, String userRole) {
        super();
        this.id = id;
        this.name = name;
        this.email = email;
        this.ideaTitle = ideaTitle;
        this.ideaDescription = ideaDescription;
        this.userRole = userRole; // Initialize user role
    }

    // Getters and setters for the new field
    public String getUserRole() {
        return userRole;
    }

    public void setUserRole(String userRole) {
        this.userRole = userRole;
    }

    // Existing getters and setters for other fields
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

    public String getIdeaTitle() {
        return ideaTitle;
    }

    public void setIdeaTitle(String ideaTitle) {
        this.ideaTitle = ideaTitle;
    }

    public String getIdeaDescription() {
        return ideaDescription;
    }

    public void setIdeaDescription(String ideaDescription) {
        this.ideaDescription = ideaDescription;
    } 
}

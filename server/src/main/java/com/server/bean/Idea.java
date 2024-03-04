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
    private double rating;
    private String feedback;
    
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

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }

	public void setId(String id) {
		this.id=id;
		
	}
	

	public void updateRatingAndFeedback(double newRating, String newFeedback) {
		this.rating=newRating;
		this.feedback=newFeedback;
	}
		
}

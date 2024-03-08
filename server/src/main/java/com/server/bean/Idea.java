package com.server.bean;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "ideas")
public class Idea {

    @Id
    private String id;
    private String title;
    private String description;
    private double rating;
    private String feedback;
    private String suggestion;
    private String status;
    private String ratedBy;
    private String reviewedBy;
    

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
        this.id = id;
    }

    public void updateRatingAndFeedback(double newRating, String newFeedback) {
        this.rating = newRating;
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
    public void updateSuggestionAndStatus(String newSuggestion,String newStatus)
    {
    	this.suggestion=newSuggestion;
    	this.status=newStatus;
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
}

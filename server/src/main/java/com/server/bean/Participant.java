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

		public Participant(String id, String name, String email, String ideaTitle, String ideaDescription) {
			super();
			this.id = id;
			this.name = name;
			this.email = email;
			this.ideaTitle = ideaTitle;
			this.ideaDescription = ideaDescription;
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
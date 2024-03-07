package com.server.bean;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "panelists")
public class Panelist {

    @Id
    private String id;
    private String name;
    private String email;

   
   
    public Panelist(String name, String email) {
        this.name = name;
        this.email = email;
        
        
    }

    public String getId() {
        return id;
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
}
   

   


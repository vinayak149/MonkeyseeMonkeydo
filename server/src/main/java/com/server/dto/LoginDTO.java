package com.server.dto;

import org.springframework.data.annotation.Id;

public class LoginDTO {
    private String id;
    private String email; 
    private String role;
    private String token;
	public LoginDTO() {
	}
    
	public LoginDTO(String id, String username, String password, String email, String role, String token) {
		super();
		this.id = id;
		this.email = email;
		this.role = role;
		this.token = token;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

}

package com.server.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdminController {
	@PostMapping("/admin/assignPanelist")
	public ResponseEntity<String> assignPanelist(){
	
	return null;	
	}
}

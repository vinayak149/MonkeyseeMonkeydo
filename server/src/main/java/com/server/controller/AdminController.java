package com.server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.server.service.AdminService;

@RestController
public class AdminController {
	@Autowired
	AdminService adminService;
	
	@PutMapping("/admin/assignPanelist")
	public ResponseEntity<String> assignPanelist(){
	try {
		adminService.assignPanelistsToTeams();
		return  ResponseEntity.ok("Api call success");
	}
	catch(Exception e) {
		return  ResponseEntity.internalServerError().body("Api call failed"+e);
	}
	}
}

package com.server.controller;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
 
import com.server.service.AdminService;
@RequestMapping("/admin")
@RestController
public class AdminController {
	@Autowired
	AdminService adminService;
	
	@PutMapping("assignPanelist")
	public ResponseEntity<String> assignPanelist(){
	try {
		adminService.assignPanelistsToTeams();
		return  ResponseEntity.ok("Api call success");
	}
	catch(Exception e) {
		return  ResponseEntity.internalServerError().body("Api call failed"+e);
	}
	}
	
	@PutMapping("/assignRole/{userId}")
    public ResponseEntity<String> assignRole(@PathVariable String userId, @RequestBody String role ) {
        try {
        	
            adminService.assignRoleToUser(userId, role);
            return ResponseEntity.ok("Role assigned successfully to user with ID: " + userId);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Failed to assign role to user: " + e.getMessage());
        }
    }
}
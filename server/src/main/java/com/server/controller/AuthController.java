package com.server.controller;

import com.server.bean.User;
import com.server.service.UserService;
import com.server.service.OtpService;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

	private UserService userService;
	private OtpService otpService;
	private Map<String, User> temporaryUserDetails = new ConcurrentHashMap<>();

	@Autowired
	public AuthController(UserService userService, OtpService otpService) {
		this.userService = userService;
		this.otpService = otpService;
	}

	@PostMapping("/register")
	public ResponseEntity<String> registerUser(@RequestBody User user) {
		// Check if the user exists
		User existingemail = userService.getUserByEmail(user.getEmail());
		if (existingemail != null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User with this Email already exists");
		}

		// Check if the user has provided an email
		if (user.getEmail() == null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email is required for registration");
		}

		// Generate and send OTP
		String sentOtp = otpService.sendOtpEmail(user.getEmail());

		if (sentOtp != null) {
			// Set the OTP in the user object for verification
			user.setOtp(sentOtp);

			// Store the user details temporarily
			temporaryUserDetails.put(user.getEmail(), user);

			return ResponseEntity.ok("OTP sent successfully. Please check your email to verify your registration.");
		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to send OTP");
		}
	}

	@PostMapping("/verify-otp")
	public ResponseEntity<String> verifyOtp(@RequestBody Map<String, String> verificationRequest) {
		String email = verificationRequest.get("email");
		String userEnteredOTP = verificationRequest.get("otp");

		// Retrieve user details from temporary storage
		User user = temporaryUserDetails.get(email);

		if (user != null && user.getOtp().equals(userEnteredOTP)) {
			// OTP verification successful, proceed with registration
			// You can update user status to "verified" or perform any other necessary
			// actions

			// Save the user to the database
			userService.registerUser(user);

			// Remove the user details from temporary storage
			temporaryUserDetails.remove(email);

			return ResponseEntity.ok("OTP verification successful. Registration completed.");
		} else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid OTP");
		}
	}

	// Other authentication endpoints...

	@PostMapping("/login")
	public ResponseEntity<Map<String, String>> loginUser(@RequestBody User user) {
		User storedUser = userService.getUserByEmail(user.getEmail());

		if (storedUser != null && storedUser.getPassword().equals(user.getPassword())) {
			// Authentication successful
			// Construct response containing user's role
			Map<String, String> response = new HashMap<>();
			response.put("message", "Login successful");
			response.put("role", storedUser.getRole()); // Assuming getRole() method exists in User class

			return ResponseEntity.ok(response);
		} else {
			// Authentication failed
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
					.body(Collections.singletonMap("message", "Invalid credentials"));
		}
	}

	@PostMapping("/resend-otp")
	public ResponseEntity<String> sendOtp(@RequestBody User user) {
		// Check if the user exists and has an email address
		User storedUser = userService.getUserByEmail(user.getEmail());
		if (storedUser != null && storedUser.getEmail() != null) {
			// Send OTP
			String sentOtp = otpService.sendOtpEmail(storedUser.getEmail());

			if (sentOtp != null) {
				// Store the user details temporarily
				temporaryUserDetails.put(user.getUsername(), user);

				return ResponseEntity.ok("OTP sent successfully");
			} else {
				return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to send OTP");
			}
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User not found or no email associated");
		}
	}

	@PostMapping("/forgot-password")
	public ResponseEntity<String> forgotPassword(@RequestBody User user) {
		// Check if the user exists
		User existingUser = userService.getUserByEmail(user.getEmail());
		if (existingUser == null || existingUser.getEmail() == null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User not found or no email associated");
		}

		// Generate and send OTP for password reset
		String sentOtp = otpService.sendOtpEmail(existingUser.getEmail());

		if (sentOtp != null) {
			// Set the OTP in the user object for verification
			existingUser.setOtp(sentOtp);

			// Store the user details temporarily
			temporaryUserDetails.put(existingUser.getEmail(), existingUser);

			return ResponseEntity.ok("OTP sent successfully. Please check your email to reset your password.");
		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to send OTP");
		}
	}

	@PostMapping("/reset-password")
	public ResponseEntity<String> resetPassword(@RequestBody Map<String, String> resetRequest) {
		String email = resetRequest.get("email");
		String userEnteredOTP = resetRequest.get("otp");
		String password = resetRequest.get("password");
		String conformpassword = resetRequest.get("conform");

		// Retrieve user details from temporary storage
		User user = temporaryUserDetails.get(email);

		if (user != null && user.getOtp().equals(userEnteredOTP)) {
			// OTP verification successful, proceed with password reset
			// Update the user's password in the database using UserService
			user.setOtp(userEnteredOTP);
			user.setPassword(password);
			if (password.equals(conformpassword))
				userService.SaveUser(user);
			// Remove the user details from temporary storage
			temporaryUserDetails.remove(email);
			return ResponseEntity.ok("Password reset successful.");
		} else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid OTP");
		}
	}

}
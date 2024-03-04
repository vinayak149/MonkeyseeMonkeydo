package com.server.controller;

import com.server.bean.User;
import com.server.service.UserService;
import com.server.service.OtpService;
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

    private final UserService userService;
    private final OtpService otpService;

    @Autowired
    public AuthController(UserService userService, OtpService otpService) {
        this.userService = userService;
        this.otpService = otpService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        userService.registerUser(user);
        return new ResponseEntity<>("User registered successfully", HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User user) {
        User storedUser = userService.getUserByUsername(user.getUsername());

        if (storedUser != null && storedUser.getPassword().equals(user.getPassword())) {
            // Check if user has OTP and verify OTP
            if (storedUser.getOtp() != null && user.getOtp() != null) {
                boolean otpVerified = otpService.verifyOtp(user.getUsername(), user.getOtp());
                if (otpVerified) {
                    return ResponseEntity.ok("Login successful");
                } else {
                    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid OTP");
                }
            } else {
                return ResponseEntity.ok("Login successful (without OTP verification)");
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

    @PostMapping("/send-otp")
    public ResponseEntity<String> sendOtp(@RequestBody User user) {
        // Check if the user exists and has an email address
        User storedUser = userService.getUserByUsername(user.getUsername());
        if (storedUser != null && storedUser.getEmail() != null) {
            // Send OTP
            otpService.sendOtpEmail(user.getEmail());
            return ResponseEntity.ok("OTP sent successfully");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User not found or no email associated");
        }
    }
}

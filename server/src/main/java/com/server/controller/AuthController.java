package com.server.controller;
 
import com.server.bean.User;
import com.server.service.UserService;
import com.server.service.OtpService;
 
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
 
    private  UserService userService;
    private OtpService otpService;
    private  Map<String, User> temporaryUserDetails = new ConcurrentHashMap<>();
 
    @Autowired
    public AuthController(UserService userService, OtpService otpService) {
        this.userService = userService;
        this.otpService = otpService;
    }
 
    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        // Check if the user exists
        User existingemail = userService.findByEmail(user.getEmail());
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
            // You can update user status to "verified" or perform any other necessary actions
 
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
    public ResponseEntity<String> loginUser(@RequestBody User user) {
        User storedUser = userService.getUserByUsername(user.getUsername());
 
        if (storedUser != null && storedUser.getPassword().equals(user.getPassword())) {
            // No OTP verification during login, proceed with login
            return ResponseEntity.ok("Login successful");
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
        User existingUser = userService.findByEmail(user.getEmail());
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
 
        // Retrieve user details from temporary storage
        User user = temporaryUserDetails.get(email);
 
        if (user != null && user.getOtp().equals(userEnteredOTP)) {
            // OTP verification successful, proceed with password reset
            // Update the user's password in the database using UserService
            userService.updateUserPassword(email, password);
 
            // Remove the user details from temporary storage
            temporaryUserDetails.remove(email);
            return ResponseEntity.ok("Password reset successful.");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid OTP");
        }
    }
 
}
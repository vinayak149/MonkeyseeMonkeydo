package com.server.service;

import com.server.bean.User;
import com.server.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class OtpService {

    @Autowired
    private UserRepo userRepository;

    @Autowired
    private JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String sender;

    public String generateOtp() {
        Random random = new Random();
        return String.format("%06d", random.nextInt(1000000));
    }

    public void saveOtp(String username) {
        User user = userRepository.findByUsername(username);
        if (user != null) {
            String otp = generateOtp();
            user.setOtp(otp);
            userRepository.save(user);
        }
    }

    public boolean verifyOtp(String username, String submittedOtp) {
        User user = userRepository.findByUsername(username);
        if (user != null && user.getOtp() != null) {
            String storedOtp = user.getOtp();
            return storedOtp.equals(submittedOtp);
        }
        return false;
    }

    public String sendOtpEmail(String userEmail) {
        //User user = userRepository.findByEmail(userEmail);

            String otp = generateOtp();

            

            try {
                SimpleMailMessage message = new SimpleMailMessage();
                message.setFrom(sender);  
                message.setTo(userEmail);
                message.setSubject("Your OTP for Login");
                message.setText("Your OTP is: " + otp);
                mailSender.send(message);

                // Log success
                System.out.println("OTP email sent successfully to: " + userEmail);

                return otp; // Indicate that OTP email was sent successfully
            } catch (Exception e) {
                // Log the exception using SLF4J or another logging framework
                System.err.println("Failed to send OTP email: " + e.getMessage());
            }
  
        return null; // Indicate that OTP email sending failed
    }

    
}

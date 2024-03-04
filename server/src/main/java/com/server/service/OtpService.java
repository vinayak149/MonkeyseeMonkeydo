package com.server.service;

import com.server.bean.User;
import com.server.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
//import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Random;

@Service
public class OtpService {
	@Autowired
    private  UserRepo userRepository;
	
	
    
	@Autowired
    private  JavaMailSender mailSender;
	@Value("${spring.mail.username}")
	private String sender;
    
   

    private String generateOtp() {
    	  Random random= new Random();
    	
        return String.format("%06d", random.nextInt(1000000));
    }

    public void saveOtp(String username) {
        User user = userRepository.findByUsername(username);
        if (user != null) {
            String otp = generateOtp();
            user.setOtp(otp); // Set the OTP directly in the User class
            userRepository.save(user);
        }
    }

    public boolean verifyOtp(String username, String submittedOtp) {
        User user = userRepository.findByUsername(username);
        if (user != null && user.getOtp() != null) {
            String storedOtp = user.getOtp();

            System.out.println("Submitted OTP: " + submittedOtp);

            // Check if the submitted OTP matches the stored OTP
            if (storedOtp.equals(submittedOtp)) {
               
                return true;
               
            }
        }
        return false;
    }


    
    public void sendOtpEmail(String userEmail) {
        User user = userRepository.findByEmail(userEmail);
        
        if (user != null) {
            String otp = generateOtp();

            // Set the OTP directly in the User class and save to the database
            user.setOtp(otp);
            userRepository.save(user);

            try {
                SimpleMailMessage message = new SimpleMailMessage();
                message.setFrom(sender);  // Set your sender email address
                message.setTo(userEmail);
                message.setSubject("Your OTP for Login");
                message.setText("Your OTP is: " + otp);
                mailSender.send(message);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

}

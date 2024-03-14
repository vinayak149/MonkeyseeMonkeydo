package com.server.service;
 
import com.server.bean.Idea;
import com.server.bean.Participant;
import com.server.bean.Team;
import com.server.repo.IdeaRepo;
import com.server.repo.TeamRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
 
import java.util.List;
 
@Service
public class MailService {
 
    @Autowired
    private IdeaRepo ideaRepo;
 
    @Autowired
    private TeamRepo teamRepo;
 
    @Autowired
    private JavaMailSender mailSender;
 
    @Value("${spring.mail.username}")
    private String sender;
 
    
 
    public  void sendEmailToParticipants(List<Participant> participants, Idea idea) {
        // Compose email subject and body
        String subject = "Congratulations! Your team's idea has been approved";
        String body = "Dear Team Member,\n\nYour team's idea \"" + idea.getTitle() + "\" has been approved. Congratulations!";
 
        // Iterate over participants and send email to each
        for (Participant participant : participants) {
            sendEmail(participant.getEmail(), subject, body);
        }
    }
 
    public  void sendEmail(String recipientEmail, String subject, String body) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(sender);
            message.setTo(recipientEmail);
            message.setSubject(subject);
            message.setText(body);
            mailSender.send(message);
 
            // Log success
            System.out.println("Email sent successfully to: " + recipientEmail);
        } catch (Exception e) {
            // Log the exception using SLF4J or another logging framework
            System.err.println("Failed to send email: " + e.getMessage());
        }
    }
    public void sendApprovedIdeasEmails(Idea idea) {
        Team team = idea.getTeam(); 
        List<Participant> participants = team.getParticipants();
        sendEmailToParticipants(participants, idea);
    }
}
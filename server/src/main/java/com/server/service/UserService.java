package com.server.service;
 
import com.server.bean.Judge;
import com.server.bean.Panelist;
import com.server.bean.Participant;
import com.server.bean.User;
import com.server.repo.JudgeRepo;
import com.server.repo.PanelistRepo;
import com.server.repo.ParticipantRepo;
import com.server.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
 
@Service
public class UserService {
 
    private  UserRepo userRepository;
    private ParticipantRepo participantRepo;
    private JudgeRepo judgeRepo;
    private PanelistRepo panelistRepo;
 
    @Autowired
    public UserService(UserRepo userRepository,ParticipantRepo participantRepo, JudgeRepo judgeRepo,PanelistRepo panelistRepo) {
        this.userRepository = userRepository;
        this.participantRepo=participantRepo;
        this.judgeRepo=judgeRepo;
        this.panelistRepo=panelistRepo;
    }
 
    public User registerUser(User user) {
        if (user.getRole() == null) {
            user.setRole("PARTICIPANT");
        }
 
        User savedUser = userRepository.save(user);
 
        // Create instances of Judge and Panelist before the switch statement
        Judge judge = null;
        Panelist panelist = null;
 
        // Based on the user's role, save to the corresponding repository
        switch (user.getRole()) {
            case "PARTICIPANT":
                Participant participant = new Participant(user.getUsername(), user.getEmail(), null);
                participantRepo.save(participant);
                break;
            case "JUDGE":
                judge = new Judge(user.getUsername(), user.getEmail());
                judgeRepo.save(judge);
                break;
            case "PANELIST":
                panelist = new Panelist(user.getUsername(), user.getEmail());
                panelistRepo.save(panelist);
                break;
        }
 
        // Additional logic for handling the saved user, if needed
 
        return savedUser;
    }
 
 
    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }
    public void SaveUser(User user)
    {
    	userRepository.save(user);
    }
 
}
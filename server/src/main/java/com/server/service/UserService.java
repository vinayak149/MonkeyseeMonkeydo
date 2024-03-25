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
        user.setPassword(user.getPassword());
        
        User savedUser = userRepository.save(user);
        Participant newParticipant = new Participant(user.getUsername(),user.getEmail());
        participantRepo.save(newParticipant);
 
        
 
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

	public User findByEmail(String email) {
		// TODO Auto-generated method stub
		return userRepository.findByEmail(email);
	}
	public User getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }
	
    public boolean authenticate(String username, String password) {
    	System.out.println(username);
        User user = findByEmail(username);
        if (user != null && password.equals(user.getPassword())) {
            return true;
        }
        return false;
    }
 
}
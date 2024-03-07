package com.server.service;

import com.server.bean.User;
import com.server.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepo userRepository;

    @Autowired
    public UserService(UserRepo userRepository) {
        this.userRepository = userRepository;
    }

    public User registerUser(User user) {
        // Set a default role (you can customize this based on your requirements)
        if (user.getRole() == null) {
            user.setRole("PARTICIPANT");
        }

        // Suggest a username without special characters
//        String suggestedUsername = suggestUsername(user.getUsername());
//        user.setUsername(suggestedUsername);
//
//        // Suggest a password with at least some symbols
//        String suggestedPassword = suggestPassword(user.getPassword());
//        user.setPassword(suggestedPassword);

        return userRepository.save(user);
    }

    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }
    public void SaveUser(User user)
    {
    	userRepository.save(user);
    }

}

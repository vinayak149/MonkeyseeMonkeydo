package com.server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.server.bean.CustomUserDetails;
import com.server.bean.User;
import com.server.repo.UserRepo;

@Component
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepo userRepository;

    //private static final Logger logger = LoggerFactory.getLogger(UserDetailsServiceImpl.class);

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        //logger.debug("Entering in loadUserByUsername Method...");
        User user = userRepository.findByEmail(username);
        System.out.println("loadUserbyUsername: "+user.getEmail());
        if(user == null){
            //logger.error("Username not found: " + username);
            throw new UsernameNotFoundException("could not found user..!!");
        }
        //logger.info("User Authenticated Successfully..!!!");
        return new CustomUserDetails(user);
    }
}
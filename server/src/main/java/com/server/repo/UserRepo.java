package com.server.repo;



import com.server.bean.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepo extends MongoRepository<User, String> {

    User findByUsername(String username);
    User findByEmail(String email);
    User save(User user);

}

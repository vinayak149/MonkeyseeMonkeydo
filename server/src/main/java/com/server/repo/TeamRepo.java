package com.server.repo;

import com.server.bean.Team;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TeamRepo extends MongoRepository<Team, String> {
    // You can add custom queries or methods here if needed
	
	
}

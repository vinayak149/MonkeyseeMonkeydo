package com.server.repo;

import com.server.bean.Idea;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface IdeaRepo extends MongoRepository<Idea, String> {
    
}

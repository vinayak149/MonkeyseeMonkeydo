package com.server.repo;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.server.bean.Panelist;
import com.server.bean.Participant;

public interface PanelistRepo extends MongoRepository<Panelist, String> {
	
	Optional<Panelist> findByEmail(String email);

}

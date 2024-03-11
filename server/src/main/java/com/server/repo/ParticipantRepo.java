package com.server.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.server.bean.Participant;
 
 
@Repository
public interface ParticipantRepo extends MongoRepository<Participant, String> {
	Participant findByNameAndEmail(String name, String email);
	Participant findByEmail(String email);
}
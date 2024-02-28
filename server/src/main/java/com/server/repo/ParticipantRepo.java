package com.server.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.server.bean.Participant;
 
 
@Repository
public interface ParticipantRepo extends MongoRepository<Participant, String> {
}
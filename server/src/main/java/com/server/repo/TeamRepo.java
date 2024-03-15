package com.server.repo;

import com.server.bean.Team;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface TeamRepo extends MongoRepository<Team, String> {
    // You can add custom queries or methods here if needed
	List<Team> findByPanelistId(String panelistId);
	Team findByTeamName(String teamName);
    @Query("{'participants._id': ?0}")
    Team findbyParticipantId(String participantId);
}

package com.server.repo;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.server.bean.Judge;
import com.server.bean.Panelist;

public interface JudgeRepo extends MongoRepository<Judge, String> {
	Optional<Judge> findByEmail(String email);
}

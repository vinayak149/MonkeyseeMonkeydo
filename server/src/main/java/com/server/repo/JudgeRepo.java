package com.server.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.server.bean.Judge;

public interface JudgeRepo extends MongoRepository<Judge, String> {

}

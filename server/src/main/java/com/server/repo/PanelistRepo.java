package com.server.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.server.bean.Panelist;

public interface PanelistRepo extends MongoRepository<Panelist, String> {

}

package com.repository;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.model.Consumer;

@Repository
public interface ConsumerRepository extends MongoRepository<Consumer, UUID> {
	public Optional<Consumer> findConsumerByEmail(String email);
	public Consumer getConsumerByEmail(String email);
}

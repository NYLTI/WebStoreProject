package com.service;

import java.util.Map;
import java.util.Optional;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.model.Consumer;
import com.repository.ConsumerRepository;

@Service
public class ConsumerService {
	private ConsumerRepository consumerRepository;
	
	public ConsumerService(ConsumerRepository consumerRepository) {
		this.consumerRepository = consumerRepository;
	}
	
	public Optional<Consumer> register(Consumer consumer){
		Optional<Consumer> optionalConsumer = consumerRepository.findConsumerByEmail(consumer.getEmail());
		if(optionalConsumer.isEmpty()) {
			UUID uuid = UUID.randomUUID();
			while(consumerRepository.findById(uuid).isPresent()) {
				uuid = UUID.randomUUID();
			}
			consumer.setId(uuid);
			return Optional.of(consumerRepository.save(consumer));
		}else {
			return Optional.empty();
		}
	}
	
	public Optional<Consumer> login(Map<String, String> consumerMap){
		Optional<Consumer> consumer = consumerRepository.findConsumerByEmail(consumerMap.get("email"));
		if(consumer.isPresent() && 
				consumer.get().getPassword().equals(consumerMap.get("password"))) {
			return consumer;
		}else {
			return Optional.empty();
		}
	}
	
}

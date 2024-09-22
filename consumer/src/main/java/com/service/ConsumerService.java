package com.service;

import java.util.Map;
import java.util.Optional;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.model.Consumer;
import com.repository.ConsumerRepository;
import com.utililties.Status;

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
	
	public Consumer completeRegistration(Consumer consumer) {
		Consumer incompleteConsumer = consumerRepository.getConsumerByEmail(consumer.getEmail());
		incompleteConsumer = consumer;
		incompleteConsumer.setStatus(Status.ACTIVE);
		return consumerRepository.save(incompleteConsumer);
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
	
	public Optional<Consumer> findByEmail(String email){
		Optional<Consumer> consumer = consumerRepository.findConsumerByEmail(email);
		if(consumer.isPresent()) {
			return consumer;
		}else {
			return Optional.empty();
		}
	}
	
}

package com.controller;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.model.Consumer;
import com.service.ConsumerService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/v1/consumer")
public class ConsumerController {
	private ConsumerService consumerService;

	@Autowired
	public ConsumerController(ConsumerService consumerService) {
		this.consumerService = consumerService;
	}

	@PostMapping("/initialregister")
	public ResponseEntity<Optional<Consumer>> initialRegister(@RequestBody Consumer consumer) {
		Optional<Consumer> opt = consumerService.register(consumer);
		if(opt.isPresent()) {
			return ResponseEntity.status(HttpStatus.CREATED).body(opt);
		}else {
			return ResponseEntity.status(HttpStatus.CONFLICT).body(Optional.empty());
		}
//		return Optional.ofNullable(consumerService.register(consumer))
//				.map(savedConsumer -> ResponseEntity.status(HttpStatus.CREATED).body(savedConsumer))
//				.orElseGet(() -> ResponseEntity.status(HttpStatus.CONFLICT).body(Optional.empty()));
	}
	
	@PutMapping("/completeregistration")
	public ResponseEntity<Consumer> completeRegister(@RequestBody @Valid Consumer consumer){
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(consumer);
	}
	
	@PostMapping("/login")
	public ResponseEntity<Optional<Consumer>> login(@RequestBody Map<String, String> consumerMap) {
		Optional<Consumer> opt = consumerService.login(consumerMap);
		if(opt.isEmpty()) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Optional.empty());
		}else {
			return ResponseEntity.status(HttpStatus.ACCEPTED).body(opt);
		}
	}
	
	@PostMapping("/checkemail")
	public ResponseEntity<Optional<Consumer>> checkEmailExists(@RequestBody String email){
		Optional<Consumer> opt = consumerService.findByEmail(email);
		if(opt.isEmpty()) {
			return ResponseEntity.status(HttpStatus.OK).body(Optional.empty());
		}else {
			return ResponseEntity.status(HttpStatus.CONFLICT).body(Optional.empty());
		}
	}
}

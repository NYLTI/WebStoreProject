package com.controller;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.model.Consumer;
import com.service.ConsumerService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/consumer")
//@CrossOrigin(origins = { "http://localhost:3000" })
public class ConsumerController {
	private ConsumerService consumerService;

	@Autowired
	public ConsumerController(ConsumerService consumerService) {
		this.consumerService = consumerService;
	}

	@PostMapping("/register")
	public ResponseEntity<Optional<Consumer>> register(@RequestBody @Valid Consumer consumer) {
		return Optional.ofNullable(consumerService.register(consumer))
				.map(savedConsumer -> ResponseEntity.status(HttpStatus.CREATED).body(savedConsumer))
				.orElseGet(() -> ResponseEntity.status(HttpStatus.CONFLICT).body(Optional.empty()));
	}
	
	@PostMapping("/login")
	public ResponseEntity<Optional<Consumer>> login(@RequestBody Map<String, String> consumerMap) {
		System.out.println("logging in");
		return Optional.ofNullable(consumerService.login(consumerMap))
				.map(loggedConsumer -> ResponseEntity.accepted().body(loggedConsumer))
				.orElseGet(() -> ResponseEntity.notFound().build());
	}

}
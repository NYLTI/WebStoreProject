package com.model;

import java.util.UUID;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.utililties.Address;
import com.utililties.Status;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Document
@Data
public class Consumer {
	@Id
	private UUID id;
	@Email
	private String email;
	@NotBlank
	@Size(min = 8, message = "password must have at least 8 characters")
	private String password;
	@NotBlank(message = "Please provide your first name")
	@Size(min = 2)
	private String firstName;
	@NotBlank(message = "Please provide your last name")
	@Size(min = 2)
	private String lastName;
	private Status status = Status.ACTIVE;
	private Address address;
}

package com.model;

import java.util.UUID;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.utililties.Address;
import com.utililties.Status;

import lombok.Data;

@Document
@Data
public class Consumer {
	@Id
	private UUID consumerId;
	private String firstName;
	private String lastName;
	private Status status = Status.ACTIVE;
	private Address address;
}

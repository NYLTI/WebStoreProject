package com.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
@Document
public class Order{
	@Id
	private ObjectId id;
	
	@NotNull
	private String userId;
	private String cartId;
}

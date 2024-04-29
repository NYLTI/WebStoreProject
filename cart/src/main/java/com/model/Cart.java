package com.model;

import java.util.List;
import java.util.Map;
import org.bson.types.ObjectId;
import org.hibernate.validator.constraints.UniqueElements;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
@Document
public class Cart {
	@Id
	private ObjectId id;
	@NotNull
	@UniqueElements
	private String userId;
	private List<Map<ObjectId, Integer>> productList;
}

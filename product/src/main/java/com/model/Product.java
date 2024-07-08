package com.model;

import java.util.List;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
@Document
public class Product {
	@Id
	private ObjectId id;
	@NotBlank
	private String name;
	@NotBlank
	private String description;
	@NotNull
	private Double price;
	@NotNull
	private Long stockQuantity;
	private String sellerId;
	private List<String> imageURLs;
	private List<String> categories;
	private Boolean isFeatured = false;
	private Boolean isBanned = false;
	private Boolean isOnSale = false;
	
	public String getId() {
		return String.valueOf(id);
	}
}

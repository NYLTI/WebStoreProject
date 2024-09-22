package com.utililties;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class Address {
	@NotBlank(message = "Please provide a street address")
	private String street;
	private String addressLine2;
	@NotBlank(message = "Please provide a city")
	private String city;
	@NotBlank(message = "Please provide your state")
	private String state;
	@NotBlank(message = "please provide your zip code")
	@Size(min = 5, message = "Zip code has to be 5 numbers")
	@Size(max = 5, message = "Zip code has to be 5 numbers")
	@Pattern(regexp = "^\\d{5}(?:[-\\s]\\d{4})?$")
	private String postalCode;
}

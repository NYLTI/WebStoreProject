package com.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.model.Product;
import com.service.ProductService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/v1/product")
public class ProductController {
	
	private ProductService productService;
	
	public ProductController(ProductService productService) {
		this.productService = productService;
	}
	
//	@GetMapping("/all")
//	public List<Product> getAllProducts(){
//		return productService.getAllProducts();
//	}
	
	@PostMapping("/add")
	public Product addProduct(@RequestBody @Valid Product product) {
		return productService.addProduct(product);
	}
}
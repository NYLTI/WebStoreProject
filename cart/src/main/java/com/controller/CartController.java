package com.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.model.Cart;
import com.service.CartService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/v1/cart")
public class CartController {
	private CartService cartService;
	
	public CartController(CartService cartService) {
		this.cartService = cartService;
	}
	
	@PostMapping("/add")
	public Cart addCart(@RequestBody @Valid Cart cart) {
		return cartService.addCart(cart);
	}
}

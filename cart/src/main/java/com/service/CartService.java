package com.service;

import org.springframework.stereotype.Service;

import com.model.Cart;
import com.repository.CartRepository;

@Service
public class CartService {
	private CartRepository cartRepository;
	
	public CartService(CartRepository cartRepository) {
		this.cartRepository = cartRepository;
	}
	
	public Cart addCart(Cart cart) {
		return cartRepository.save(cart);
	}
}

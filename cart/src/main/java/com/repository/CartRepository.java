package com.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import com.model.Cart;

@RepositoryRestResource(collectionResourceRel = "cart", path = "cart", itemResourceRel = "cart")
public interface CartRepository extends MongoRepository<Cart, ObjectId>{
	@RestResource(path = "byUser", rel = "findByUserId")
	Cart findByUserId(@Param("user") String userId);
}

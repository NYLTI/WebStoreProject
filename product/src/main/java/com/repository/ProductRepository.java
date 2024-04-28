package com.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import com.model.Product;

@Repository
@RepositoryRestResource(collectionResourceRel = "all", path = "all")
public interface ProductRepository extends MongoRepository<Product, ObjectId>{
}

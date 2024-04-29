package com.repository;

import java.util.List;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import com.model.Product;
import com.utilities.Category;

@RepositoryRestResource(collectionResourceRel = "product", path = "product", itemResourceRel = "product")
public interface ProductRepository extends MongoRepository<Product, ObjectId>{
	@RestResource(path = "bySeller", rel = "findBySeller", exported = true)
	List<Product> findBySellerId(@Param("seller") String sellerId);
	
	@RestResource(path = "categories", rel ="filterByCategories")
	List<Product> findByCategoriesIn(@Param("categories") List<Category> categories);
}

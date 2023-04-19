package ch.oliverfaust.whatshouldieatfoodservice.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import ch.oliverfaust.whatshouldieatfoodservice.model.FoodItem;

@Repository
public interface FoodItemRepository extends MongoRepository<FoodItem, Integer> {
}

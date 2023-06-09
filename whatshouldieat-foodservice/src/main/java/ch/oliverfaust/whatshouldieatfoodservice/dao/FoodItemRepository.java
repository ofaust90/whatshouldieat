package ch.oliverfaust.whatshouldieatfoodservice.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ch.oliverfaust.whatshouldieatfoodservice.model.FoodItem;

@Repository
public interface FoodItemRepository extends JpaRepository<FoodItem, Integer> {
}

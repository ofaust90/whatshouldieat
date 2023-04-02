package ch.oliverfaust.whatshouldieatfoodservice.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ch.oliverfaust.whatshouldieatfoodservice.dao.FoodItemRepository;
import ch.oliverfaust.whatshouldieatfoodservice.model.FoodItem;
import ch.oliverfaust.whatshouldieatfoodservice.model.FoodType;


@Service @Transactional
public class FoodItemService {

    private final FoodItemRepository repository;
    private List<FoodItem> fullFoodItemsList;
    
   @Autowired
   public FoodItemService(FoodItemRepository foodItemRepository){
       this.repository = foodItemRepository;
       initalizeDatabaseWithDemoValues();
   } 

   public void initalizeDatabaseWithDemoValues(){
        repository.saveAll(List.of(
            new FoodItem("Spaghetti", FoodType.KOCHEN),
            new FoodItem("Avocado Toast", FoodType.KOCHEN),
            new FoodItem("Vito", FoodType.TAKEOUT))
        ).forEach(System.out::println); 
    }


    public Optional<FoodItem> findFoodItemById(Integer id){
        return repository.findById(id);
    }

    public FoodItem saveFoodItem(FoodItem foodItem){
        return repository.save(foodItem);
    }

    public List<FoodItem> getAllFoodItems(){
        if(fullFoodItemsList == null || fullFoodItemsList.isEmpty()){
            return repository.findAll();
        }
        return fullFoodItemsList;
    }

    public FoodItem updateFoodItem(Integer id, FoodItem newFoodItem){
        return repository.findById(id)
        .map(foodItem -> {
            foodItem.setName(newFoodItem.getName());
            foodItem.setFoodRecipe(newFoodItem.getFoodRecipe());
            foodItem.setIngredients(newFoodItem.getIngredients());
            foodItem.setImageUrl(newFoodItem.getImageUrl());
            foodItem.setAdditionalInformation(newFoodItem.getAdditionalInformation());
          return repository.save(foodItem);
        })
        .orElseGet(() -> {
              newFoodItem.setId(id);
          return repository.save(newFoodItem);
        });
    }

    public void deleteFoodItem(Integer id){
        repository.deleteById(id);
    }

    public Long countFoodItems(){
        return repository.count();
    }
}

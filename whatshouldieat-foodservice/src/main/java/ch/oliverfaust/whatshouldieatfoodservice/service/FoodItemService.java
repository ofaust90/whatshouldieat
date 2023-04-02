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

    public void initalizeDatabaseWithDemoValues(){
        repository.saveAll(List.of(
            new FoodItem("Spaghetti", FoodType.KOCHEN),
            new FoodItem("Avocado Toast", FoodType.KOCHEN),
            new FoodItem("Vito", FoodType.TAKEOUT),
            new FoodItem("Spaghetti Carbonara", FoodType.KOCHEN),
            new FoodItem("Avocado Toast", FoodType.KOCHEN),
            new FoodItem("Flammenkuchen", FoodType.KOCHEN),
            new FoodItem("Pizza", FoodType.KOCHEN),
            new FoodItem("Risotto", FoodType.KOCHEN),
            new FoodItem("Gmüesplätzli", FoodType.KOCHEN),
            new FoodItem("Fishsticks", FoodType.KOCHEN),
            new FoodItem("Rice Bowl", FoodType.KOCHEN),
            new FoodItem("Signature Dish", FoodType.KOCHEN),
            new FoodItem("Gmüesssuppe", FoodType.KOCHEN),
            new FoodItem("Pita", FoodType.KOCHEN),
            new FoodItem("Tacos", FoodType.KOCHEN),
            new FoodItem("Lachs", FoodType.KOCHEN),
            new FoodItem("Auflauf", FoodType.KOCHEN),
            new FoodItem("Thai curry", FoodType.KOCHEN),
            new FoodItem("Indisch", FoodType.KOCHEN),
            new FoodItem("Wirz Pasta", FoodType.KOCHEN),
            new FoodItem("Sandwitch Toast", FoodType.KOCHEN),
            new FoodItem("Käse und Brot", FoodType.KOCHEN),
            new FoodItem("Spaghetti mit Soja und Poulet", FoodType.KOCHEN),
            new FoodItem("Lauch Härdöpfel", FoodType.KOCHEN),
            new FoodItem("Fisch mit Salzhärdöpfel", FoodType.KOCHEN),
            new FoodItem("Linse mit Fladebrot", FoodType.KOCHEN),
            new FoodItem("Omelette", FoodType.KOCHEN),
            new FoodItem("Lemonata", FoodType.KOCHEN),
            new FoodItem("Hörnli mit ghacktem", FoodType.KOCHEN),
            new FoodItem("Cordon Bleue", FoodType.KOCHEN),
            new FoodItem("Lasagne", FoodType.KOCHEN),
            new FoodItem("Teigware mit Pesto", FoodType.KOCHEN),
            new FoodItem("Teigware mit Bolognese", FoodType.KOCHEN),
            new FoodItem("Steak", FoodType.KOCHEN),
            new FoodItem("Riis mit Gmüess", FoodType.KOCHEN),
            new FoodItem("Gfüllti Peperroni", FoodType.KOCHEN),
            new FoodItem("Salade riche", FoodType.KOCHEN),
            new FoodItem("Lachsbrötli", FoodType.KOCHEN),
            new FoodItem("Gnocci Auflauf", FoodType.KOCHEN),
            new FoodItem("Tortellini", FoodType.KOCHEN),
            new FoodItem("Wasser und Brot", FoodType.KOCHEN),
            new FoodItem("Härdöpfelstock", FoodType.KOCHEN),
            new FoodItem("Takeout", FoodType.KOCHEN),
            new FoodItem("mir egal, säg du ¯\\_(ツ)_/¯", FoodType.KOCHEN),
            new FoodItem("Schinkengipfeli", FoodType.KOCHEN),
            new FoodItem("Schawarma", FoodType.KOCHEN),
            new FoodItem("Schnitzelbrot", FoodType.KOCHEN),
            new FoodItem("Ganzes Poulet", FoodType.KOCHEN),
            new FoodItem("Panang Curry", FoodType.KOCHEN),
            new FoodItem("Gmüessgipfeli", FoodType.KOCHEN),
            new FoodItem("Gnocci mit Spinatsauce", FoodType.KOCHEN),
            new FoodItem("Wraps", FoodType.KOCHEN),
            new FoodItem("Pide", FoodType.KOCHEN),
            new FoodItem("Gmüesswähe", FoodType.KOCHEN),
            new FoodItem("Linsensuppe", FoodType.KOCHEN),
            new FoodItem("Piccata", FoodType.KOCHEN),
            new FoodItem("Lauchgratin", FoodType.KOCHEN),
            new FoodItem("Pasta mit Thon-Tomatensauce", FoodType.KOCHEN),
            new FoodItem("Chilli con carne", FoodType.KOCHEN),
            new FoodItem("Shakschukkka", FoodType.KOCHEN)
           )

        ).forEach(System.out::println); 
    }
}

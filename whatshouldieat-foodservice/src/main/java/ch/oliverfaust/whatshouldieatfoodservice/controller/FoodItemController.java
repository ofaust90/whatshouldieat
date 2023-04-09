package ch.oliverfaust.whatshouldieatfoodservice.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import ch.oliverfaust.whatshouldieatfoodservice.model.FoodItem;
import ch.oliverfaust.whatshouldieatfoodservice.model.FoodType;
import ch.oliverfaust.whatshouldieatfoodservice.service.FoodItemService;

@RestController
public class FoodItemController {
    
    private final FoodItemService service;

    @Autowired
    public FoodItemController(FoodItemService foodItemService){
        this.service = foodItemService;
    }

    @CrossOrigin(origins = "http://127.0.0.1:8081")
    @GetMapping("/fooditem")
    public List<FoodItem> returnFoodItems(){
        return service.getAllFoodItems();
    }

    @CrossOrigin(origins = "http://127.0.0.1:8081")
    @GetMapping("/fooditem/{id}")
    public FoodItem returnFoodItemById(@PathVariable("id") Integer id){
         Optional<FoodItem> opt = service.findFoodItemById(id);
         if(!opt.isEmpty()){
             System.out.println(opt.get());
           return (FoodItem)opt.get();
         }
         return null;    
    }

    @CrossOrigin(origins = "http://127.0.0.1:8081")
    @PostMapping("/fooditem")
    public FoodItem addFoodItem(@RequestBody FoodItem newFoodItem) {
        return service.saveFoodItem(newFoodItem);
    }

    @CrossOrigin(origins = "http://127.0.0.1:8081")
    @PutMapping("/fooditem/{id}")
    public FoodItem updatFoodItem(@RequestBody FoodItem updateFoodItem, @PathVariable Integer id){
        return service.updateFoodItem(id, updateFoodItem);
    }

    @CrossOrigin(origins = "http://127.0.0.1:8081")
    @DeleteMapping("/fooditem/{id}")
    public void deleteFoodItem(@PathVariable Integer id){
        service.deleteFoodItem(id);
    }

    @GetMapping("/test")
    public FoodItem test(){
        return new FoodItem("Test", FoodType.KOCHEN); 
    }

}

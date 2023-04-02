package ch.oliverfaust.whatshouldieatfoodservice.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
public class FoodItem {

    @Id
    @GeneratedValue
    @Getter
    @Setter
    private Integer id;
    
    @Getter
    @Setter
    private String name;

    @Getter
    @Setter
    private FoodType type;

    @Getter
    @Setter
    private String ingredients = "n/a";

    @Getter
    @Setter
    private String foodRecipe = "n/a";

    @Getter
    @Setter
    private String imageUrl = "";

    @Getter
    @Setter
    private String additionalInformation = "";

    public FoodItem(){};

    public FoodItem(String name, FoodType type){
        this.name = name;
        this.type = type;
    }

    public FoodItem(String name, FoodType type, String ingredients, String foodRecipe){
        this.name = name;
        this.type = type;
        this.ingredients = ingredients;
        this.foodRecipe = foodRecipe;
    }

    public String toString(){
        return this.id + " " + this.name;
    }
}

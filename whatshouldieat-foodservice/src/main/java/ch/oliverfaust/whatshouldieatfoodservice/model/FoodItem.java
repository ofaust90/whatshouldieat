package ch.oliverfaust.whatshouldieatfoodservice.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.jackson.Jacksonized;

@Data
@Jacksonized
@Document(collection = "fooditem")
public class FoodItem {
 
    @Transient
    public static final String SEQUENCE_NAME = "fooditem_sequence";

    @Id
    @Getter
    @Setter
    private long id;
    
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

    @Getter
    @Setter
    private long ownerId;

    public FoodItem(){};


    public FoodItem(String name, FoodType type){
        this.name = name;
        this.type = type;
    }

    public FoodItem(String name, FoodType type, long ownerId){
        this.name = name;
        this.type = type;
        this.ownerId = ownerId;
    }

    public FoodItem(String name, FoodType type, String ingredients, String foodRecipe){
        this.name = name;
        this.type = type;
        this.ingredients = ingredients;
        this.foodRecipe = foodRecipe;
    }

    public FoodItem(String name, FoodType type, String ingredients, String foodRecipe, long ownerId){
        this.name = name;
        this.type = type;
        this.ingredients = ingredients;
        this.foodRecipe = foodRecipe;
        this.ownerId = ownerId;
    }

    public String toString(){
        return this.id + " " + this.name;
    }
}

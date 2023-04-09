import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FooditemService } from '../fooditem.service';

@Component({
  selector: 'app-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.css']
})
export class SuggestComponent implements OnInit{


  name: String = "Nicole";
  foodSuggestion : String = "";
  foodSuggestionObj: any = null; 

  foodItems: any = [];  //TODO antipattern
  suggestedFoodItems: any[] = [];
  details: boolean = false;

  constructor(
    private fooditemService : FooditemService,
  ){}

  ngOnInit(): void {
    this.fooditemService.loadData()
    .subscribe(data => 
    {
      this.foodItems = data;
      console.log("(suggest) loaded ..." + data);
      console.log("orig data; "+this.foodItems);
      //clone array
      this.foodItems.forEach((val: any) => this.suggestedFoodItems.push(Object.assign({}, val)));
  
      console.log(this.foodItems);
      this.suggestRandom();
    });   
  }

  suggestRandom(): void{
    this.hideDetails();
    const randomIndex = Math.floor(Math.random() * this.suggestedFoodItems.length);
    
    if(this.suggestedFoodItems.length > 0){
      const randomElement = this.suggestedFoodItems[randomIndex];
      this.foodSuggestion = randomElement.name;
      this.foodSuggestionObj = randomElement;
      //renove item so it doesn't come up a second time
      this.suggestedFoodItems.splice(randomIndex, 1);
      console.log("copy "+this.suggestedFoodItems.length);
      console.log(this.suggestedFoodItems);
    }else{
      this.foodSuggestion = "denn weissi au nüm witer.. bstell dr doch eifach öpis!";
    }
  }

  showDetails(): void{
    this.details = true;
  }

  hideDetails(): void{
    this.details = false;
  }


}

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

  foodItems: any = {};  //TODO antipattern
  details: boolean = false;

  constructor(
    private fooditemService : FooditemService,
  ){}

  ngOnInit(): void {
    this.fooditemService.loadData()
    .subscribe(data => this.foodItems = data);
   
    console.log(this.foodItems);
    this.suggestRandom();
  }

  suggestRandom(): void{
    this.hideDetails();
    const randomElement = this.foodItems[Math.floor(Math.random() * this.foodItems.length)];
    this.foodSuggestion = randomElement.name;
    this.foodSuggestionObj = randomElement;
  }

  showDetails(): void{
    this.details = true;
  }

  hideDetails(): void{
    this.details = false;
  }


}

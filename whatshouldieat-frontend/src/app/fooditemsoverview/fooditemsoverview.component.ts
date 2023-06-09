import { Component, OnInit } from '@angular/core';
import { EditfooditemComponent } from '../editfooditem/editfooditem.component';
import { FooditemService } from '../fooditem.service';

@Component({
  selector: 'app-fooditemsoverview',
  templateUrl: './fooditemsoverview.component.html',
  styleUrls: ['./fooditemsoverview.component.css']
})
export class FooditemsoverviewComponent implements OnInit{
 
  foodItems: any = [];  //TODO antipattern
  searchText: string = "";

  constructor(
    private fooditemService : FooditemService,
  ){}

  ngOnInit(): void {
    this.fooditemService.loadData()
    .subscribe(data => 
      {
        this.foodItems = data;
        console.log("(overview) loaded ..." + data);
      });
   
    console.log(this.foodItems);
   // this.newFoodItem();
  

  }

  addNewFoodItem(){
  //  newItem : any =  ;
  //TODO 
    this.foodItems.push({ name : "", type: "KOCHEN" });
  }
}

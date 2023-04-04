import { Component, OnInit } from '@angular/core';
import { FooditemService } from '../fooditem.service';

@Component({
  selector: 'app-fooditemsoverview',
  templateUrl: './fooditemsoverview.component.html',
  styleUrls: ['./fooditemsoverview.component.css']
})
export class FooditemsoverviewComponent implements OnInit{
 
  foodItems: any = {};  //TODO antipattern


  constructor(
    private fooditemService : FooditemService,
  ){}

  ngOnInit(): void {
    this.fooditemService.loadData()
    .subscribe(data => this.foodItems = data);
   
    console.log(this.foodItems);
  
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-fooditem',
  templateUrl: './fooditem.component.html',
  styleUrls: ['./fooditem.component.css']
})
export class FooditemComponent implements OnInit{

  @Input() foodItems: any = null;
 
  foodRecepie: String = "";
  foodIngredients: String = "";
 // foodIngredients = new FormControl();
   ngOnInit(): void {
     this.foodRecepie = this.foodItems.foodRecepie;
     this.foodIngredients = this.foodItems.ingredients;
  //   this.foodIngredients.setValue(this.foodItems.ingredients);
   //  this.foodIngredients.disable();
   }
 
   editItem(): void{
     
   }
}

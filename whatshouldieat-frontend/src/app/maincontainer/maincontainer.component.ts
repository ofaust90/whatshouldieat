import { Component, OnInit } from '@angular/core';
import { FooditemService } from '../fooditem.service';

@Component({
  selector: 'app-maincontainer',
  templateUrl: './maincontainer.component.html',
  styleUrls: ['./maincontainer.component.css']
})
export class MaincontainerComponent implements OnInit {
  
  constructor(
    private fooditemService : FooditemService,
  ){}

  ngOnInit(): void {
 
  }



}

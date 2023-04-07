import { Component, ElementRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EditfooditemComponent } from '../editfooditem/editfooditem.component';
@Component({
  selector: 'app-fooditem',
  templateUrl: './fooditem.component.html',
  styleUrls: ['./fooditem.component.css'],
  //  standalone: true,
 // providers: [NgbModalConfig, NgbModal],
})
export class FooditemComponent implements OnInit{

  @Input() foodItem: any = null;

  @ViewChild("modalEditDialog",{static:true}) content:ElementRef;

  constructor(private modalService: NgbModal) {}
  
  ngOnInit(): void {
  console.log("in on init " +this.foodItem +" "+this.foodItem.name);
    // in case of a new empty item, open dialog 
    if(this.foodItem.name == "" || undefined){
      this.open(this.content)
    }
  }
 
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log(result)
    }, (reason) => {
      console.log(reason)
    });
  } 
     
  loginFormSubmit(){
    console.log("submit triggered" + this.foodItem.name)
  }
}

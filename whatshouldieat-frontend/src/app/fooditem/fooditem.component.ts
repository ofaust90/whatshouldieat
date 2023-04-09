import { Component, ElementRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EditfooditemComponent } from '../editfooditem/editfooditem.component';
import { FooditemService } from '../fooditem.service';
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

  SAVED: string = "saved";

  constructor(
    private modalService: NgbModal,
    private fooditemService : FooditemService
    ) {}
  
  ngOnInit(): void {
 // console.log("in on init " +this.foodItem +" "+this.foodItem.name);
    // in case of a new empty item, open dialog 
    if(this.foodItem.name == "" || undefined){
      this.open(this.content)
    }
  }
 
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log("res: "+ result)
      switch(result){
        case "saved":
          console.log(
            this.fooditemService
            .save(this.foodItem)
            .subscribe());
          break;
        case "delete":
          this.fooditemService
          .delete(this.foodItem)
          .subscribe();
          break;
        case "abort":
        break;
      }
    }, (reason) => {
      console.log(" reason "+reason)
    });
  } 
}

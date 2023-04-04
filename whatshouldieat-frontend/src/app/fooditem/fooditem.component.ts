import { Component, Input, OnInit } from '@angular/core';
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

  @Input() foodItems: any = null;
 
  loginForm!: FormGroup;
  foodRecepie: String = "";
  foodIngredients: String = "";
 // foodIngredients = new FormControl();
 // formGroup: FormGroup;
/*
    constructor(private modalService: NgbModal, private formBuilder: FormBuilder) {
      this.formGroup = formBuilder.group({});
    }
*/
  
    constructor(private modalService: NgbModal) {}
  
  ngOnInit(): void {
      this.foodRecepie = this.foodItems.foodRecepie;
      this.foodIngredients = this.foodItems.ingredients;
    //   this.foodIngredients.setValue(this.foodItems.ingredients);
    //  this.foodIngredients.disable();
 /*   this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });*/
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
    }
 
   editItem(): void{
     
   }

   open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
     
    }, (reason) => {
     
    });
  } 
     
/*
   openModal() {
    const modalRef = this.modalService.open(EditfooditemComponent, { size: 'md' });
    modalRef.componentInstance.formGroup = this.formGroup;

    modalRef.result.then(result => {
      console.log('The modal was closed');
    }).catch(reason => {
      console.log(`The modal was dismissed with reason: ${reason}`);
    });
  }*/
  get emailField(): any {
    return this.loginForm.get('email');
  }
  get passwordField(): any {
    return this.loginForm.get('password');
  }

  loginFormSubmit(): void {
    console.log(this.loginForm.value);
  
    // Call Api
  }
}

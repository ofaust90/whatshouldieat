import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-editfooditem',
  templateUrl: './editfooditem.component.html',
  styleUrls: ['./editfooditem.component.css'],

})
export class EditfooditemComponent {

  title = 'bootstrap-popup';
  loginForm!: FormGroup;
  constructor( ) { }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

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

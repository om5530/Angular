import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = "Angular Reactive Form"
  loginForm = new FormGroup({
    user:new FormControl('omkar',[Validators.required,Validators.email]),//default value 'omkar   //validators.pattern('[a-zA-z]+$')
    password:new FormControl('omkar@123',[Validators.required , Validators.minLength(5)]) //default value 'omkar@123
  })
  loginUser(){
    console.log(this.loginForm.value)
  }
  get user(){
    return  this.loginForm.get('user')
  }
  get password(){
    return this.loginForm.get('password')
  }
}

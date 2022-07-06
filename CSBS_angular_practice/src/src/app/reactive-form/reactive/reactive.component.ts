import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {
constructor(private fb :FormBuilder){}


//using form buildery:
registrationForm = this.fb.group({
  userName:['Vishvas',Validators.required, ],
  password:[''],
  confirmPassword:[''],
  address: this.fb.group({
    city:[''],
    state:[''],
    postalCode:['']
  })
})

//using formGroup formcontrol
// registrationForm = new FormGroup({
//  userName : new FormControl('omkar'),  //default value omkar
//  password : new FormControl(''),
//  confirmPassword : new FormControl(''),
//  address: new FormGroup({
//  city:new FormControl(''),
//  state:new FormControl(''),
//  postalCode:new FormControl(''),
 
//  })
// });


  ngOnInit(): void {
  }

  loadApiData(){
this.registrationForm.patchValue({
  userName : 'sai',
 password : 'sai@123',
 confirmPassword : 'sai@123',
 address: {
 city: 'nanded',
 state:'maharashtra',
 postalCode: 431605,
}
})
  }
}

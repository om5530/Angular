import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
title = 'If-else-condition';
show = true

color = 'red'
bgColor = 'green'
updateColor(){
  this.color = 'blue'
  this.bgColor = 'yellow'
}

users=['omkar','sam','sai','rupesh']
userDetails=[
  {name:'Anil',email:'om@gmail.com',phone:'9921279128',socialAccounts:['facebook','insta','twitter']},
  {name:'sai',email:'sai@gmail.com',phone:'9922466094',socialAccounts:['youtube','insta','twitter']},
  {name:'sam',email:'sam@gmail.com',phone:'9763124865',socialAccounts:['yahoo','insta','snap']}
]
}

import { Component, OnInit } from '@angular/core';


interface dataType{
  name:string,
  id:number,
  indian:boolean,
  address:any
}
@Component({
  selector: 'app-model-interface',
  templateUrl: './model-interface.component.html',
  styleUrls: ['./model-interface.component.scss']
})
export class ModelInterfaceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
title='blog'
Data(){
const data:dataType={ 
   name:'omkar',
   id:1,
   indian:true,
   address:'noida up'
}
return data
}
}

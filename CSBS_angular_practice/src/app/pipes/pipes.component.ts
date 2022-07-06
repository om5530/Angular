import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
name = 'Omkar'
today = Date()
capString(item:string){
  return item.toUpperCase()
}

//Advance pipe
user ={
  name:'omkar',
  phone:'9921279128',
  age:22
}
}

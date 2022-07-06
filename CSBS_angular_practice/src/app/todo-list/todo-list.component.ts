import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  list:any[]=[]
title ='Todo List with Angular'
addTask(item:string){
// console.log(item)
this.list.push({id:this.list.length,name:item})
console.log(this.list)
}

remove(id:number){
  console.log(id)
  this.list = this.list.filter((item)=>{
    item.id !== id
  })
}
}

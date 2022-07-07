import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, OnChanges {

  constructor() {
    console.log("I am from Contructor");
   }

  ngOnInit(): void {
    console.log(this.a + this.b);
  }

  a = 10;
  b = 10;
  c= 0;

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
  }

  changeAValue(ev:any){
    console.log(ev);
    this.a = 9;
  }
  clicFun(ev:any){
    console.log(ev);
  }

  keyD(ev:any){
    console.log(ev);
  }
  keyU(ev:any){
    console.log(ev);
  }

  setC(ev:number){
    this.c = ev;
  }


}

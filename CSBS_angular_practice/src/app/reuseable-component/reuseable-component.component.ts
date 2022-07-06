import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-reuseable-component',
  templateUrl: './reuseable-component.component.html',
  styleUrls: ['./reuseable-component.component.scss']
})
export class ReuseableComponentComponent implements OnInit {

  constructor() { }
@Input() item:{name:string,email:string}={name:'',email:''}
  ngOnInit(): void {
  }

}

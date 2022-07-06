import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss']
})
export class GetDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getData(val:string){
    console.log(val)
  }

}

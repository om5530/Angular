import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-box-val',
  templateUrl: './input-box-val.component.html',
  styleUrls: ['./input-box-val.component.scss']
})
export class InputBoxValComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayVal: string = ''
  getInputValue(value: string) {
    console.warn(value)
    this.displayVal = value
  }
}

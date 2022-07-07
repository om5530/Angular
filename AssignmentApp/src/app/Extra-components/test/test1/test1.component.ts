import { Component, OnInit, Output, SimpleChanges, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit {

  thirdNumber: number = 0;
  txt: number = 0;
  @Input() firstNumber!: number;
  @Input() secondNumber!: number;
  @Output() result: EventEmitter<number> = new EventEmitter<number>();
  s = 0;
  constructor() {
    this.thirdNumber = this.multiply(8, 9);
  }

  ngOnInit(): void {
    //this.multiply(8,9);
    //this.myFunction();

    this.thirdNumber = this.addition(
      (a: number) => {
        return a;
      },
      (b: number) => {
        return b;
      }
    );
  }

  sum1() {
    this.s = this.firstNumber + this.secondNumber;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  sum() {
    this.result.emit(this.firstNumber + this.secondNumber);
  }

  multiply(a: number, b: number) {
    return a * b;
  }

  myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  myFunction() {
    this.myArray.push(55);
    this.myArray.unshift(90);
    for (let i = 0; i < this.myArray.length; i++) {
      this.txt += this.myArray[i];
    }
  }
  addition(first: any, second: any) {
    return first(7) + second(8);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name = 'omkar'
  disabl:boolean = false
  // disable(value:string){
  //   if(value == 'true'){
  //     return this.disabl = true
  //   }else{
  //     return this.disabl = false
  //   }
  // }
  keyup(value:string = 'false'){
return this.disabl = false
  }

  keyDown(value:string = 'true'){
    return this.disabl = true
  }
}

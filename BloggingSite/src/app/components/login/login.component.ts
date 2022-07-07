import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  success:any;
  error:any;
  loginUserData = {
    email:'',
    password:''
  }
  constructor(private _auth:AuthService, private _router:Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      {
        next: (res) => {
          //  console.log(res.data.token);
          //  console.log(res.data.authorId);
           localStorage.setItem('token',res.data.token)
           localStorage.setItem('authorId',res.data.authorId)
          this.success = res.message
        },
        error: (e) =>  {this.error = e.error.message}
    }
    )
  }
  // reset(form:any){
  //   setTimeout(() => {
  //     return form.form.reset()
  //   }, 5000);
   
  // }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  message:any;
  success:any;
  registerUserData = {
    fname: '',
    lname: '',
    title: '',
    email: '',
    password: ''
  }
  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  registeringUser() {
    this._auth.registerUser(this.registerUserData)
      .subscribe({
        next: (res) => {
          this.success = res.msg
          setTimeout(() => {
            this._router.navigate(['/login'])
          }, 1000);
          alert(this.success)
        },
        error: (e) =>  this.message = e.error.message,
    })
  }

}

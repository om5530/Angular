import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog/blog.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  loading = false;
  message:any;
  success:any;
  registerUserData = {
    fname: '',
    lname: '',
    title: '',
    email: '',
    password: ''
  }
  constructor(private _auth: AuthService, private _router: Router, private _blog:BlogService) { }

  ngOnInit(): void {
  }

  registeringUser() {
    this.loading = true;
    this._auth.registerUser(this.registerUserData)
      .subscribe({
        next: (res) => {
          this.loading = false;
          this.success = res.msg
          setTimeout(() => {
            this._router.navigate(['/login'])
          }, 1000);
          // alert(this.success)
          this._blog.openSnackBar(`${res.msg}`);
        },
        error: (e) => { 
          this.loading = false;
          this.message = e.error.message,
          // this._blog.openSnackBar(`${e.error.message}`);
          this._blog.openSnackBar(`${e.error.msg}`);
        }
    })
  }

}

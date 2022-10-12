import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog/blog.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading=false;
  success:any;
  error:any;
  loginUserData = {
    email:'',
    password:''
  }
  constructor(private _auth:AuthService, private _blog:BlogService, private _router:Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.loading = true
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      {
        next: (res) => {
          this.loading = false;
           localStorage.setItem('token',res.data.token)
           localStorage.setItem('authorId',res.data.authorId)
          this.success = res.message
          this._blog.openSnackBar(`${res.message}`);
            this._router.navigate(['/blog'])
        },
        error: (e) =>  {
          this.error = e.error.message
          this.loading = false;
          this._blog.openSnackBar(`${e.error.message}`);
        }
    }
    )
  }
}

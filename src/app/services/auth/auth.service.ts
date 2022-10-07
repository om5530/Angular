import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "https://bloggingsite12.herokuapp.com/createAuthor"
  private _loginUrl = "https://bloggingsite12.herokuapp.com/login"

  constructor(private _http: HttpClient ,private _router : Router ){}

  registerUser(data:any){
    return this._http.post<any>(this._registerUrl, data)
  }

  loginUser(data:any){
    return this._http.post<any>(this._loginUrl, data)
  }
  loggedIn(){
    return !!localStorage.getItem('token')  // !!Double negation   it will return true or false boolean value
  }

  authorId(){
    return localStorage.getItem('authorId')
  }
  getToken(){
    return localStorage.getItem('token')
  }
  logoutUser(){
    localStorage.removeItem('token')
    localStorage.removeItem('authorId')
    this._router.navigate(['/home'])
  }
}

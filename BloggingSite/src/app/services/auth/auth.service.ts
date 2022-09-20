import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/createAuthor"
  private _loginUrl = "http://localhost:3000/login"

  constructor(private _http: HttpClient ,private _router : Router ){}

  registerUser(data:any){
    return this._http.post<any>(this._registerUrl, data)
  }
  getUsers(url:any){
    return this._http.get<any>(url)
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

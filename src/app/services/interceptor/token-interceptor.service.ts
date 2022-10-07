import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private _auth:AuthService) {}
  intercept(req:any ,next:any){
    let tokenReq = req.clone({
      setHeaders:{
        Authorization:`Bearer ${this._auth.getToken()}` 
      }
    })
    return next.handle(tokenReq)
  }

}

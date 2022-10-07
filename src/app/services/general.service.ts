import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor( private _http :HttpClient) { }

  postUrl(url:any,data:any){
   return  this._http.post<any>(url,data)
  }
  
  getShortenUrl(url:any){
    this._http.get<any>(url)
  }
}

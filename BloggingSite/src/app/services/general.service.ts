import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor( private _http :HttpClient) { }

  private _postUrl = "http://localhost:3000/url/shorten"
  private _getShortenUrl = "http://localhost:3000/:urlCode"
  postUrl(data:any){
    this._http.post<any>(`${this._postUrl}`,data)
  }

  getShortenUrl(){
    this._http.get<any>(`${this._getShortenUrl}`)
  }
}

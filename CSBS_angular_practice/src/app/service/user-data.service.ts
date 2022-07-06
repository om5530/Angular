import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) { }
url = 'http://localhost:3000/users'
  users(){
    return this.http.get(this.url)
  }

  postApi(data:any){
   return this.http.post(this.url,data)
  }
}
 
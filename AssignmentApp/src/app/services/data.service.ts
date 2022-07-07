import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _url :string ="/assets/employee.json";

  constructor(private http: HttpClient) { }

  getMultiple(url: string, callback: any) {
    this.http.get(url).subscribe(
      {
        next: (success) => { callback(success); },
        error: (error) => { callback(error); },
        complete: () => console.info('complete')
      }
    )
  }

  getSingle(id: number, url: string, callback: any) {
    this.http.get(url + "/" + id).subscribe(
      {
        next: (success) => { callback(success); },
        error: (error) => { callback(error); },
        complete: () => console.info('complete')
      }
    )
  }

  postData(url: string, data: any, callback: any) {
    this.http.post(url, data).subscribe(
      {
        next: (success) => { callback(success); },
        error: (error) => { callback(error); },
        complete: () => console.info('complete')
      }
    )
  }

  updateData(id:any,url:any,data:any, callback:any){
    this.http.put((`${url}/${id}`),data).subscribe((success)=>{
      callback(success);
    })
  }

  delete(id:any,url:any,callback:any){
    this.http.delete(url+"/"+id).subscribe(
      (success) => { callback(success) });
  }

  getEmployees(): Observable<any>{
    return this.http.get<any>(this._url);
   }

}
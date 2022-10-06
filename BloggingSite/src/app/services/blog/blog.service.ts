import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private _createBlogUrl = "https://bloggingsite12.herokuapp.com/createBlogs"
  // private _getSingleBlogUrl = "localhost:3000/getBlog/:blogId"
  private _updateBlogUrl = "https://bloggingsite12.herokuapp.com/UpdateBlogs"
  private _deleteByQueryUrl = "https://bloggingsite12.herokuapp.com/deleteBlogsByQuery"
  constructor(private _http: HttpClient, private snackBar: MatSnackBar) { }

  createBlog(data:any){
    return this._http.post<any>(this._createBlogUrl, data)
  }

  getBlog(url:any){
    return this._http.get<any>(url)
  }
  
  getSingleBlog(url:any,id:any){
    return this._http.get<any>(`${url}/${id}`)
  }

  updateBlog(id:any,data:any){
    return this._http.put<any>(`${this._updateBlogUrl}/${id}`,data)
  }

  deleteBlog(id: any,url:any){
    console.log(`${url}/${id}`)
    return this._http.delete<any>(`${url}/${id}`)
  }
  
  deleteByQuery(){
    return this._http.delete(this._deleteByQueryUrl)
  }

  openSnackBar(message: string, options?: MatSnackBarConfig, action?: string) {
    const defaultOptions: MatSnackBarConfig = {
      duration: 2000,
    };

    if (options) {
      Object.assign(defaultOptions, options);
    }

    if (!action) { action = ''; }

    this.snackBar.open(message, action, defaultOptions);
  }
}

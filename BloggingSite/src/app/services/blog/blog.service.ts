import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private _createBlogUrl = "http://localhost:3000/createBlogs"
  private _getBlogUrl = "http://localhost:3000/getBlogs"
  private _updateBlogUrl = "http://localhost:3000/UpdateBlogs/:id"
  private _deleteByQueryUrl = "http://localhost:3000/deleteBlogsByQuery"
  constructor(private _http: HttpClient ) { }

  createBlog(data:any){
    return this._http.post<any>(this._createBlogUrl, data)
  }

  getBlog(){
    return this._http.get<any>(this._getBlogUrl)
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

}

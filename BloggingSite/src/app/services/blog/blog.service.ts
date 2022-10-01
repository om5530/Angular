import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private _createBlogUrl = "https://bloggingsite12.herokuapp.com/createBlogs"
  private _getBlogUrl = "https://bloggingsite12.herokuapp.com/getBlogs"
  private _getSingleBlogUrl = "https://bloggingsite12.herokuapp.com/getBlog/:blogId"
  private _updateBlogUrl = "https://bloggingsite12.herokuapp.com/UpdateBlogs"
  private _deleteByQueryUrl = "https://bloggingsite12.herokuapp.com/deleteBlogsByQuery"
  constructor(private _http: HttpClient ) { }

  createBlog(data:any){
    return this._http.post<any>(this._createBlogUrl, data)
  }

  getBlog(){
    return this._http.get<any>(this._getBlogUrl)
  }
  
  getSingleBlog(id:any){
    return this._http.get<any>(`${this._getSingleBlogUrl}/${id}`)
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

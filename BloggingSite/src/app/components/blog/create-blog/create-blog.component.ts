import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog/blog.service';
import { Blog } from 'src/app/classes/blog';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {


  authorId = this._auth.authorId()
  
  blogModel = new Blog('','',`${this.authorId}`,''.split(','),'',[''],false)
  success:any;
  blogData = {
    title : '',
    body : '',
    authorId: `${this.authorId}`,
    tags:[''],
    category:'',
    subcategory:[''],
    isPublished:false
  }
  constructor(private _blogService: BlogService ,private _auth :AuthService) { }

  ngOnInit(): void {
    // console.log(this.blogData.tags)
    // console.log(this.blogData)
    console.log(this._auth.authorId())
  }
 
  createBlog() {
    let tags:any[] = this.blogData.tags
    let subcategory:any[] = this.blogData.subcategory
        tags =  this.blogData.tags.toString().split(',')
        subcategory =  this.blogData.tags.toString().split(',')
    this.blogData.tags = tags
    this.blogData.subcategory = subcategory
    this._blogService.createBlog(this.blogData)
      .subscribe({
        next: (res) => {
          this.success = res.msg
        },
        error: (e) => console.log(e),
      })
  }

    reset(form:any){
      if(this.success){
        setTimeout(() => {
          return form.form.reset()
        }, 2000);
      }
  }
}

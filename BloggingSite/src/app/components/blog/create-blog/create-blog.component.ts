import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog/blog.service';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {
  authorId = this._auth.authorId()
  getBlog: any;
  success:any;
  url = `http://localhost:3000/getBlogs?authorId=${this.authorId}`
  blogData = {
    _id:null,
    title : '',
    body : '',
    authorId: `${this.authorId}`,
    tags:[''],
    category:'',
    subcategory:[''],
    isPublished:false
  }
  constructor(private _blog: BlogService ,private _auth :AuthService) { }

  ngOnInit(): void {
    this.getMultiple()
    // console.log(this.blogData.tags)
    console.log(this.blogData)
    // console.log(this._auth.authorId())
  }
 
  createBlog() {
    let tags:any[] = this.blogData.tags
    let subcategory:any[] = this.blogData.subcategory
        tags =  this.blogData.tags.toString().split(',')
        subcategory =  this.blogData.tags.toString().split(',')
    this.blogData.tags = tags
    this.blogData.subcategory = subcategory
    this._blog.createBlog(this.blogData)
      .subscribe({
        next: (res) => {
          this.success = res.msg
          this.getMultiple()
          alert(res.msg)
        },
        error: (e) => console.log(e),
      })
  }

  fillData(single: any) {
    this.blogData = single;
    console.log(this.blogData)
  }

  getMultiple(){
    this._auth.getUsers(`http://localhost:3000/getBlogs?authorId=${this.authorId}`)
  .subscribe(
    {
      next: (res) => {
        this.getBlog = res.data
        console.log(this.getBlog)
      },
      error: (e) => console.log(e),
    }
  )
  }
  changeData(){
    if (this.blogData._id) {
      this.updateData(this.blogData._id);
      console.log(this.blogData)
    } else {
      this.createBlog();
    }
  }
  updateData(id: number) {
    this._blog.updateBlog(
      id,
      this.blogData
    ).subscribe(
      {
        next: (res) => {
          this.getBlog = res.data
          this.getMultiple()
          console.log(this.getBlog)
          alert(res.msg)
        },
        error: (e) => console.log(e),
      }
    )
  }

  delete(id: any) {
    this._blog.deleteBlog(id, 'http://localhost:3000/deleteBlogsById').subscribe({
      next: (res) => {
        // console.log(res)
        alert(res.message)
        this._auth.getUsers(this.url)
          .subscribe(
            {
              next: (res) => {
                this.getBlog = res.data
                console.log(this.getBlog)
              },
              error: (e) => console.log(e),
            }
          )
      },
      error: (e) => {
        alert(e.statusText)
      }
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

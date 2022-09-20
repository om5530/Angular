import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { BlogService } from 'src/app/services/blog/blog.service';
@Component({
  selector: 'app-get-blog',
  templateUrl: './get-blog.component.html',
  styleUrls: ['./get-blog.component.scss']
})
export class GetBlogComponent implements OnInit {


  constructor(private _auth: AuthService, private _blog: BlogService) { }


  // url = `http://localhost:3000/getBlogs?authorId=${this.authorId}`


  ngOnInit(): any {
    // this._auth.getUsers(this.url)
    //   .subscribe(
    //     {
    //       next: (res) => {
    //         this.getBlog = res.data
    //         // console.log(this.getBlog)
    //       },
    //       error: (e) => console.log(e),
    //     }
    //   )
  }
  // fillData(single: any) {
  //   this.blogData = single;
  //   console.log(this.blogData)
  // }


  // updateData(id: number, data: any) {
  //   this._blog.updateBlog(
  //     id,
  //     this.blogData
  //   );
  // }

  // delete(id: any) {
  //   this._blog.deleteBlog(id, 'http://localhost:3000/deleteBlogsById').subscribe({
  //     next: (res) => {
  //       // console.log(res)
  //       alert(res.message)
  //       this._auth.getUsers(this.url)
  //         .subscribe(
  //           {
  //             next: (res) => {
  //               this.getBlog = res.data
  //               console.log(this.getBlog)
  //             },
  //             error: (e) => console.log(e),
  //           }
  //         )
  //     },
  //     error: (e) => {
  //       alert(e.statusText)
  //     }
  //   })
  // }
}


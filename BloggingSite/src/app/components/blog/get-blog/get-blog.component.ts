import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-get-blog',
  templateUrl: './get-blog.component.html',
  styleUrls: ['./get-blog.component.scss']
})
export class GetBlogComponent implements OnInit {
  getBlog:any;
  constructor(private _auth:AuthService , private activatedRoute :ActivatedRoute , private _router : Router) { }
  authorId = this._auth.authorId()
  category = '';
  url =  `http://localhost:3000/getBlogs?authorId=${this.authorId}` 
  
  addParameterToURL(param:any){
   let _url = `http://localhost:3000/getBlogs?authorId=${this.authorId}`
    _url += (_url.split('?')[1] ? '&':'?') + param;
    return _url;
}


  ngOnInit(): any {
    console.log(this.addParameterToURL(this.category))
     this._auth.getUsers(this.addParameterToURL(this.category))
    .subscribe(
      {
        next: (res) => {
          this.getBlog = res.data
          console.log(this.getBlog)
        },
        error: (e) => console.log(e),
      }
    )

    this.activatedRoute.queryParams.subscribe(
      params => { console.log(params)
      this.category = params['category']
      console.log(this.category)}
    )
   

    this.activatedRoute.queryParams.subscribe(res=>{
      console.log(res) //will give query params as an object
    })
  }

  preserveBlog() {
    this._router.navigate(['/getBlog'], { queryParamsHandling: 'preserve' });
  }

  goToGetBlog() {
    this._router.navigate(['/getBlog'], { queryParams: { category: 'fiction' },queryParamsHandling: 'preserve' });
  }


}


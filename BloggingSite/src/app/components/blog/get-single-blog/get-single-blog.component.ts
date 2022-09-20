import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-get-single-blog',
  templateUrl: './get-single-blog.component.html',
  styleUrls: ['./get-single-blog.component.scss']
})
export class GetSingleBlogComponent implements OnInit {
  singleBlog:any;
  constructor(private route: ActivatedRoute,
    private _blog: BlogService ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this._blog.getSingleBlog(
        parseInt(id),
      ).subscribe(
        {
          next: (res) => {
            this.singleBlog = res.data
            console.log(this.singleBlog)
          },
          error: (e) => console.log(e),
        })}}}
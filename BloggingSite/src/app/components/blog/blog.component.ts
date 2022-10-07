import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { BlogService } from 'src/app/services/blog/blog.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { ActivatedRoute } from '@angular/router';
import { DummyDialogComponent } from './dummy-dialog/dummy-dialog.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})


export class BlogComponent implements OnInit {
  loading = false;
  totalLength:any;
  page:number=1;
  getBlog: any;
  @Input() data:any
  filter:any={
    tags:'',
    category:'',
    subcategory:''
  }

  dash:any= '--'
  tags = this.filter.tags
  authorId = this._auth.authorId()
  constructor(private _auth: AuthService, private _blog: BlogService, public dialog: MatDialog,private _route: ActivatedRoute){}

  url: any = `https://bloggingsite12.herokuapp.com/getBlogs?authorId=${this.authorId}`
  

  ngOnInit(): void {
    this.getMultiple()
    // console.log(this.tags)
    // console.log(  this.getBlog)
    
    this._route.queryParams.subscribe((query)=>{
      // console.log(query)
    })
    // console.log(this.getBlog)
  }


  fillData(single: any) {
    // this.blogData = single;
    // console.log(this.blogData)
  }
  
  getMultiple() {
    this.loading = true;
    this._blog.getBlog(this.url)
      .subscribe(
        {
          next: (res) => {
            this.loading = false;
            // console.log(res.data)
            // this._blog.openSnackBar(`${res.msg}`)
            this.getBlog = res.data
            // console.log('this is data>>',this.getBlog)
          },
          error: (e) => {
            console.log(e),
              this._blog.openSnackBar(`${e.error.msg}`)
            this.loading = false;
          } 
        }
      )
  }

  delete(id: any) {
    this._blog.deleteBlog(id, 'https://bloggingsite12.herokuapp.com/deleteBlogsById').subscribe({
      next: (res) => {
        // console.log(res)
        // alert(res.message)
        this._blog.openSnackBar(`${res.message}`);
        this._blog.getBlog(this.url)
          .subscribe(
            {
              next: (res) => {
                this.getBlog = res.data
                // console.log(this.getBlog)
              },
              error: (e) => console.log(e),
            }
          )
      },
      error: (e) => {
        // alert(e.statusText)
        this._blog.openSnackBar(`${e.statusText}`);
      }
    })
  }

  openDialog() {
    this.dialog.open(CreateBlogComponent, {
      width: '500px'
    }).afterClosed().subscribe(res => {
        this.getMultiple()
      })

  }

  openDialogEdit(row:any) {
    this.dialog.open(CreateBlogComponent, {
      width: '500px',
      data: row
    });
    // console.log(this.data)
  }

  openDialogDelete(id:any){
    this.dialog.open(DummyDialogComponent,{
      width:'300px'
    }).afterClosed().subscribe(res=>{
      // console.log(res)
      if(res === 'true'){
        // console.log('asd')
          this.delete(id)
          this.getMultiple()
      }
    })
  }

  openDialogView(row: any){
    this.dialog.open(ViewBlogComponent, {
      width: '500px',
      data:row
    })
  }

  // updateData(id: number) {
  //   this._blog.updateBlog(
  //     id,
  //     this.blogData
  //   ).subscribe(
  //     {
  //       next: (res) => {
  //         this.getBlog = res.data
  //         this.getMultiple()
  //         console.log(this.getBlog)
  //         // alert(res.msg)
  //         this._blog.openSnackBar(`${res.msg}`);
  //       },
  //       error: (e) => console.log(e),
  //     }
  //   )
  // }

}

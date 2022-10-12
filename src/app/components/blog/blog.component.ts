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

  // filter:any={
  //   tags:'',
  //   category:'',
  //   subcategory:''
  // }


  authorId = this._auth.authorId()
  constructor(private _auth: AuthService, private _blog: BlogService, public dialog: MatDialog,private _route: ActivatedRoute){}

  url: any = `https://bloggingsite12.herokuapp.com/getBlogs?authorId=${this.authorId}`
  

  ngOnInit(): void {
    this.getMultiple()
    this._route.queryParams.subscribe((query)=>{
    })

  }
  getMultiple() {
    this.loading = true;
    this._blog.getBlog(this.url)
      .subscribe(
        {
          next: (res) => {
            this.loading = false;
            // this._blog.openSnackBar(`${res.msg}`)
            this.getBlog = res.data
          },
          error: (e) => {
             this._blog.openSnackBar(`${e.error.msg}`)
            this.loading = false;
          } 
        }
      )
  }

  delete(id: any) {
    this._blog.deleteBlog(id, 'https://bloggingsite12.herokuapp.com/deleteBlogsById').subscribe({
      next: (res) => {
        this._blog.openSnackBar(`${res.message}`);
        this._blog.getBlog(this.url)
          .subscribe(
            {
              next: (res) => {
                this.getBlog = res.data
              },
              error: (e) => console.log(e),
            }
          )
      },
      error: (e) => {
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
  }

  openDialogDelete(id:any){
    this.dialog.open(DummyDialogComponent,{
      width:'300px'
    }).afterClosed().subscribe(res=>{
      if(res === 'true'){
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

}

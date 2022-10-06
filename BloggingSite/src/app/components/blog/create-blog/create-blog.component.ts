import { Component, Inject, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog/blog.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {
  authorId = this._auth.authorId()
  getBlog: any;
  success:any;
  url = `https://bloggingsite12.herokuapp.com/getBlogs?authorId=${this.authorId}`
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
  
  constructor(private _blog: BlogService ,private _auth :AuthService,
    public dialogRef: MatDialogRef<CreateBlogComponent>,
    @Inject(MAT_DIALOG_DATA) public edit:any
    ) { }

  ngOnInit(): void {
    this.getMultiple()
    if(this.edit){
    this.fillData()
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
 
  createBlog() {
    if (!this.blogData.title || !this.blogData.body || !this.blogData.category ) {
      this._blog.openSnackBar('Please fill required details.')
      return;
    }
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
          // alert(res.msg)
          this._blog.openSnackBar(`${res.msg}`);
          this.closeDialog()
        },
        error: (e) => {
          this._blog.openSnackBar(`${e.statusText}`)
         this.closeDialog()
        }
      })
  }

  fillData() {
    this.blogData = this.edit;
  }

  getMultiple(){
    this._blog.getBlog(this.url)
  .subscribe(
    {
      next: (res) => {
        this.getBlog = res.data
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
          // alert(res.msg)
          this._blog.openSnackBar(`${res.msg}`);
          this.closeDialog()
        },
        error: (e) => {
          // console.log(e)
          this._blog.openSnackBar(`${e.statusText}`)
          this.closeDialog()
        }
        
      }
    )
  }

  reset(form:any){
      if(this.success){
        setTimeout(() => {
          return form.form.reset()
        }, 2000);
      }
  }
}

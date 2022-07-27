import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../service/user-data.service';

@Component({
  selector: 'app-post-api',
  templateUrl: './post-api.component.html',
  styleUrls: ['./post-api.component.scss']
})
export class PostApiComponent implements OnInit {

  constructor(private userData:UserDataService) { }

  ngOnInit(): void {
  }
   title = 'Post API Call in Angular'
   getUserFormData(data:any){
    console.log(data)
    this.userData.postApi(data).subscribe((res)=>{
     alert('success')
    })
   }
}

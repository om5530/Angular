import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.scss']
})
export class User1Component implements OnInit {

  constructor(private route:ActivatedRoute) { }
  userId:any;
  ngOnInit(): void {
    console.log("user id is:",this.route.snapshot.paramMap.get('id'))
    this.userId = this.route.snapshot.paramMap.get('id')
  }

}

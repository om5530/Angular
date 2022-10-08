import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog/blog.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public _auth :AuthService, private service : BlogService) { }

  ngOnInit(): void {
    this.service.openSnackBar('This site is under development, so you may encounter bugs', {duration: 5000})
  }

}

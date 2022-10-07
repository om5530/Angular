import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public _auth: AuthService, private _router: ActivatedRoute){

  }

}

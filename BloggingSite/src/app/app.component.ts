import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  router: string;
  constructor(public _auth: AuthService, private _router: Router){
    this.router = _router.url; 
  }
}

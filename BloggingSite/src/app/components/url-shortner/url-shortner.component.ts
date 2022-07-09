import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
@Component({
  selector: 'app-url-shortner',
  templateUrl: './url-shortner.component.html',
  styleUrls: ['./url-shortner.component.scss']
})
export class UrlShortnerComponent implements OnInit {

  constructor(public _UrlService : GeneralService ) { }

  ngOnInit(): void {
  }

}

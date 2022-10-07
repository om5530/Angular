import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
@Component({
  selector: 'app-url-shortner',
  templateUrl: './url-shortner.component.html',
  styleUrls: ['./url-shortner.component.scss']
})
export class UrlShortnerComponent implements OnInit {
  loading = false;
  postUrl = 'https://url-shortner12.herokuapp.com/url/shorten'
  getUrl = 'https://url-shortner12.herokuapp.com/:urlCode'

  data = {
    longUrl : ''
  }

  result:any
  constructor(public _UrlService: GeneralService) { }

  ngOnInit() {
    console.log(this.data)
  }

  post() {
    this.loading = true
    this._UrlService.postUrl(
      this.postUrl,
      this.data
    ).subscribe(
      {
        next: (res:any) => {
          this.loading = false
         this.result = res.data
        },
        error: (e:any) => {
          console.log(e)

        }

      }
    )
  }

copy(data:any){
    /* Copy text into clipboard */
    navigator.clipboard.writeText
      (data);
}

  myFunction(data:any) {
    window.open(
      data, "_blank");
  }
}



import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.scss']
})
export class SingleViewComponent implements OnInit {
  customers :any;
  constructor(private route: ActivatedRoute,
    private dataService: DataService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.dataService.getSingle(
        parseInt(id),
        "https://fakestoreapi.com/products", 
        (response:any)=>{this.customers = response;}
        );
    }


    // const id = this.route.snapshot.paramMap.get('id')
    // if(id){
    //   this.dataService.getSingle(parseInt(id),"http://localhost:3000/customers",(success:any)=>{
    //     this.customers=success;
    //   })
    //  }
  }
}

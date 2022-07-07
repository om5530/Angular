import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-get-products',
  templateUrl: './get-products.component.html',
  styleUrls: ['./get-products.component.scss']
})
export class GetProductsComponent implements OnInit {
  productList: any;
  public employees:any=[];
  urlData: any;
  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this._dataService.getMultiple("https://fakestoreapi.com/products", (response: any) => {
      this.productList = response;
    })

    this._dataService.getSingle(1, "https://fakestoreapi.com/products", (success: any) => {
      this.urlData = success;
    })

    this._dataService.postData("https://fakestoreapi.com/products", this.urlData, (success: any) => {
      alert("data is posted successfully");
    })

    this._dataService.delete(1, "https://fakestoreapi.com/products", (success: any) => {
      alert("data the deleted with given id")
    })
}
}

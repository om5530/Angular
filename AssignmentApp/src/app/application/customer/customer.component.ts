import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customers: any;
  addCustomer = {
    id: null,
    Name: '',
    Email: '',
    Password: '',
    Gender: '',
    Mobile: '',
    Age: '',
    Pincode: '',
    City: '',
    phone: '',
    TandC: '',
  };
  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.getAll();
    console.log(this.customers)
  }

  changeData() {
    if (this.addCustomer.id) {
      this.updateData(this.addCustomer.id);
    } else {
      this.postData();
    }
  }
  fillData(single: any) {
    this.addCustomer = single;
  }

  updateData(id: number) {
    this._dataService.updateData(
      id,
      'http://localhost:3000/customers',
      this.addCustomer,
      (success: any) => {
        alert('data is updated');

        this.getAll();
      }
    );
  }

  getAll() {
    this._dataService.getMultiple(
      'https://fakestoreapi.com/products',
      (success: any) => {
        this.customers = success;
      
      }
    );
  }
  postData() {
    this._dataService.postData(
      'http://localhost:3000/customers',
      this.addCustomer,
      (success: any) => {
        this.addCustomer = {
          id: null,
          Name: '',
          Email: '',
          Password: '',
          Gender: '',
          Mobile: '',
          Age: '',
          Pincode: '',
          City: '',
          phone: '',
          TandC: '',
        };
        alert('data is Added successfully');
      }
    );
  }

  removeData(id: number) {
    this._dataService.delete(id, 'http://localhost:3000/customers', (success: any) => {
      alert('data is deleted successfully');
    });
  }

}

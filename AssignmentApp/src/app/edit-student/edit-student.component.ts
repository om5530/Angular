import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {
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
  constructor( private _dataService :DataService , private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this._dataService.getSingle(
        parseInt(id),
        'http://localhost:3000/customers',
        (response: any) => {
          this.addCustomer = response;
        }
      );
    }
  }

  updateData() {
    alert('data updated successfully');

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this._dataService.updateData(
        parseInt(id),
        'http://localhost:3000/customers',
        this.addCustomer,
        (response: any) => {
          this.customers = response;
        }
      );
    }
  }

}

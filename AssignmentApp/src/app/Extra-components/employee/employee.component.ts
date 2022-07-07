import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  singleemployees: any;
  employees: any;
  employeeData = {
    id: 0,
    name: '',
    surname: '',
    gender: '',
    salary: '',
    address: '',
    age: '',
    phone: null,
  };
  constructor( private _dataService : DataService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.getAll();

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this._dataService.getSingle(
        parseInt(id),
        'http://localhost:3000/employees',
        (response: any) => {
          this.singleemployees = response;
        }
      );
    }

    this._dataService.getEmployees()
    .subscribe((data:any) => this.employees = data);

  }
  data() {
    if (this.employeeData.id) {
      this.updatedata(this.employeeData.id);
    } else {
      this.postdata();
    }
  }
  getAll() {
    this._dataService.getMultiple(
      'http://localhost:3000/employees',
      (success: any) => {
        this.employees = success;
      }
    );
  }

  getSingle() {
    this._dataService.getSingle(
      1,
      'http://localhost:3000/employees',
      (success: any) => {
        this.employees = success;
      }
    )
  }

  postdata() {
    this._dataService.postData(
      'http://localhost:3000/employees',
      this.employeeData,
      (response: any) => {
        alert('data posted successfully');
      }
    );
  }

  updatedata(id: number) {
    this._dataService.updateData(
      id,
      'http://localhost:3000/employees',
      this.employeeData,
      (success: any) => {
        this.getAll();
        alert('data successfully updated');
      }
    );
  }

  delete(id: number) {
    this._dataService.delete(
      id,
      'http://localhost:3000/employees',
      (Response: any) => {
        alert('the data is successfully deleted');
        this.getAll();
      }
    );
  }

  fillData(employeee: any) {
    this.employeeData = employeee;
  }

}

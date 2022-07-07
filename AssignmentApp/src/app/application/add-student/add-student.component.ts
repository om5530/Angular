import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  students: any;
  student = {
    id: null,
    name: '',
    gender: '',
    email: '',
    phone: '',

  }
  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.getAll();
  }

  fillData(single: any) {
    this.student = single;
  }
  delete(id: number) {
    this._dataService.delete(id, 'http://localhost:3000/customers', (success: any) => {
      alert('data is deleted successfully');
    });
  }

  changeData() {
    if (this.student.id) {
      this.updateData(this.student.id);
    } else {
      this.postData();
    }
  }
  updateData(id: number) {
    this._dataService.updateData(
      id,
      'http://localhost:3000/customers',
      this.student,
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
        this.students = success;

      }
    );
  }

  postData() {
    this._dataService.postData(
      'http://localhost:3000/customers',
      this.student,
      (success: any) => {
        this.student = {
          id: null,
          name: '',
          gender: '',
          email: '',
          phone: '',

        }
        alert('data is Added successfully');
      }
    );
  }
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.scss']
})
export class UpdateStudentComponent implements OnInit {
  students: any;
  addStudents: any = {
    id: null,
    name: '',
    email: '',
    mobile: '',
  };
  constructor(private route: ActivatedRoute, private _dataService: DataService) { }

  ngOnInit(): void {
    this.getAll();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this._dataService.getSingle(
        parseInt(id),
        'http://localhost:3000/students',
        (success: any) => {
          this.addStudents = success;
        }
      );
    }
  }

  edit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this._dataService.updateData(
        parseInt(id),
        'http://localhost:3000/students',
        this.addStudents,
        (success: any) => {
          alert('data is updated successfully');
        }
      );
    }
  }


  getAll() {
    this._dataService.getMultiple(
      'http://localhost:3000/students',
      (success: any) => {
        this.students = success;
      }
    );
  }


  Post() {
    this._dataService.postData(
      'http://localhost:3000/students',
      this.addStudents,
      (success: any) => {
        alert('data is posted successfully');
      }
    );
  }

  data() {
    if (this.addStudents.id) {
      this.updatedata(this.addStudents.id);
    } else {
      this.Post();
    }
  }

  updatedata(id: number) {
    this._dataService.updateData(
      id,
      'http://localhost:3000/employees',
      this.addStudents,
      (success: any) => {
        alert('data is successfully updated');
      }
    );
  }

}

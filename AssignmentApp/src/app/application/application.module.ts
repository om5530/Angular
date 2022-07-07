import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StudentSingleViewComponent } from './student-single-view/student-single-view.component';
import { GetAllStudentsComponent } from './get-all-students/get-all-students.component';
import { FormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { UpdateStudentComponent } from './update-student/update-student.component';


@NgModule({
  declarations: [
    AddStudentComponent,
    EditStudentComponent,
    StudentSingleViewComponent,
    GetAllStudentsComponent,
    CustomerComponent,
    UpdateStudentComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    FormsModule
  ]
})
export class ApplicationModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleViewComponent } from '../components/single-view/single-view.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { GetAllStudentsComponent } from './get-all-students/get-all-students.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  {
    path:"add",
    component:AddStudentComponent
  },
  {
    path:"viewMultiple",
    component:GetAllStudentsComponent
  },
  {
    path:"edit/:id",
    component:EditStudentComponent
  },
  {
    path:"singleView/:id",
    component:SingleViewComponent
  },
  { 
    path: 'updatestudent/:id', 
    component: UpdateStudentComponent 
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }

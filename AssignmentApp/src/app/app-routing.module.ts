import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { SingleViewComponent } from './single-view/single-view.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StudentSingleViewComponent } from './add-student/student-single-view/student-single-view.component';

const routes: Routes = [
  {
    path:"add",
    component:AddStudentComponent
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
    path:"studentSingleView/:id",
    component:StudentSingleViewComponent
  },
  // { 
  //   path: 'updatestudent/:id', 
  //   component: UpdateStudentComponent 
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { SingleViewComponent } from './single-view/single-view.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

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
    path: 'updatestudent/:id', 
    component: UpdateStudentComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

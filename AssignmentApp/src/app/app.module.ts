import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleViewComponent } from './single-view/single-view.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { RouterModule } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { CustomerComponent } from './customer/customer.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './Extra-components/employee/employee.component';
import { GetProductsComponent } from './Extra-components/get-products/get-products.component';
import { StudentSingleViewComponent } from './add-student/student-single-view/student-single-view.component';
@NgModule({
  declarations: [
    AppComponent,
    SingleViewComponent,
    GetProductsComponent,
    EmployeeComponent,
    AddStudentComponent,
    CustomerComponent,
    EditStudentComponent,
    StudentSingleViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

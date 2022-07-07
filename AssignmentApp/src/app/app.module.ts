import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleViewComponent } from './single-view/single-view.component';
import { HttpClientModule } from '@angular/common/http';
import { GetProductsComponent } from './components/get-products/get-products.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { DataService } from './services/data.service';
import { RouterModule } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { CustomerComponent } from './customer/customer.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { FormsModule } from '@angular/forms';
import { UpdateStudentComponent } from './update-student/update-student.component';
@NgModule({
  declarations: [
    AppComponent,
    SingleViewComponent,
    GetProductsComponent,
    EmployeeComponent,
    AddStudentComponent,
    CustomerComponent,
    EditStudentComponent,
    UpdateStudentComponent,
    

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

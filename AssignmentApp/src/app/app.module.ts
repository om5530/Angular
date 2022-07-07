import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleViewComponent } from './components/single-view/single-view.component';
import { HttpClientModule } from '@angular/common/http';
import { GetProductsComponent } from './components/get-products/get-products.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { FormsModule } from '@angular/forms';
import { ApplicationComponent } from './application/application.component';
import { DataService } from './services/data.service';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    SingleViewComponent,
    GetProductsComponent,
    EmployeeComponent,
    ApplicationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

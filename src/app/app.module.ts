import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth/auth.service';
import { BlogService } from './services/blog/blog.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component'
import { TokenInterceptorService } from './services/interceptor/token-interceptor.service';
import { CreateBlogComponent } from './components/blog/create-blog/create-blog.component';
import { UrlShortnerComponent } from './components/url-shortner/url-shortner.component';
import { GetSingleBlogComponent } from './components/blog/get-single-blog/get-single-blog.component';
import { GuardGuard } from './guard/guard.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { BlogComponent } from './components/blog/blog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DummyDialogComponent } from './components/blog/dummy-dialog/dummy-dialog.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ViewBlogComponent } from './components/blog/view-blog/view-blog.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    HomeComponent,
    CreateBlogComponent,
    UrlShortnerComponent,
    GetSingleBlogComponent,
    BlogComponent,
    DummyDialogComponent,
    ViewBlogComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    NgxPaginationModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [AuthService, BlogService, GuardGuard ,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

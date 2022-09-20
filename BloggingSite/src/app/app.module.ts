import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

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
import { GetBlogComponent } from './components/blog/get-blog/get-blog.component';
import { UrlShortnerComponent } from './components/url-shortner/url-shortner.component';
import { GetSingleBlogComponent } from './components/blog/get-single-blog/get-single-blog.component';
import { GuardGuard } from './guard/guard.guard';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    HomeComponent,
    CreateBlogComponent,
    GetBlogComponent,
    UrlShortnerComponent,
    GetSingleBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [AuthService, BlogService, GuardGuard ,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

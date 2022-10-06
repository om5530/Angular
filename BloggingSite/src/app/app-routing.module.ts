import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { CreateBlogComponent } from './components/blog/create-blog/create-blog.component';
import { GetSingleBlogComponent } from './components/blog/get-single-blog/get-single-blog.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { UrlShortnerComponent } from './components/url-shortner/url-shortner.component';
import { GuardGuard } from './guard/guard.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'blog',
    component:BlogComponent,
    canActivate:[GuardGuard]
  },
  {
    path:'single/:id',
    component:GetSingleBlogComponent
  },
  {
    path:'**', //this is called wild card
    component:PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBlogComponent } from './components/blog/create-blog/create-blog.component';
import { GetBlogComponent } from './components/blog/get-blog/get-blog.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { UrlShortnerComponent } from './components/url-shortner/url-shortner.component';

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
    component:CreateBlogComponent
  },
  {
    path:'getBlog',
    component:GetBlogComponent
  },
  {
    path: 'urlshortner',
    component: UrlShortnerComponent
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

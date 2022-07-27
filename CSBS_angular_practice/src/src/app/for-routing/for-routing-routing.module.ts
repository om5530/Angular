import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutMyCollegeComponent } from './about-my-college/about-my-college.component';
import { NoPage404Component } from './no-page404/no-page404.component';
import { User1Component } from './user1/user1.component';
import { User2Component } from './user2/user2.component';
import { User3Component } from './user3/user3.component';

const routes: Routes = [
  {
    path:'user/:id',
    component:User1Component
  },
  {
    path:'about',
    component:User2Component,
    children:[
      {
      path:'me',
      component:AboutMeComponent
    },
    {
      path:'college',
      component:AboutMyCollegeComponent
    },
  ]
  },
  {
    path:'',
    component:User3Component
  },
  {
    path:'**', //this is called wild card
    component:NoPage404Component
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForRoutingRoutingModule { }

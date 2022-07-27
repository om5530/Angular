import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForRoutingRoutingModule } from './for-routing-routing.module';
import { User1Component } from './user1/user1.component';
import { User2Component } from './user2/user2.component';
import { User3Component } from './user3/user3.component';


@NgModule({
  declarations: [
    User1Component,
    User2Component,
    User3Component
  ],

  imports: [
    CommonModule,
    ForRoutingRoutingModule
  ]
})
export class ForRoutingModule { }

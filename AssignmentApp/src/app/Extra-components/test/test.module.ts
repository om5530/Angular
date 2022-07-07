import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';


@NgModule({
  declarations: [
    TestComponent,
    Test1Component,
    Test2Component
  ],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }

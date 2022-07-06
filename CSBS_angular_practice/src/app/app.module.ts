import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { UserListComponent } from './user-list/user-list.component';
import { HeaderComponent } from './header/header.component';
import { FormsComponent } from './forms/forms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ChildComponent } from './child/child.component';
import { GetDataComponent } from './get-data/get-data.component';
import { InputBoxValComponent } from './input-box-val/input-box-val.component';
import { ReuseableComponentComponent } from './reuseable-component/reuseable-component.component';
import { ChildToParentComponent } from './child-to-parent/child-to-parent.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ForRoutingModule } from './for-routing/for-routing.module';
import { NoPage404Component } from './for-routing/no-page404/no-page404.component';
import { AboutMyCollegeComponent } from './for-routing/about-my-college/about-my-college.component';
import { AboutMeComponent } from './for-routing/about-me/about-me.component';
import { FooterComponent } from './footer/footer.component';
import { PostApiComponent } from './post-api/post-api.component';
import { ModelInterfaceComponent } from './model-interface/model-interface.component';
import { ReactiveModule } from './reactive-form/reactive/reactive.module';

@NgModule({
  declarations: [   
    AppComponent,
    UserListComponent,
    HeaderComponent,
    FormsComponent,
    TodoListComponent,
    ChildComponent,
    GetDataComponent,
    InputBoxValComponent,
    ReuseableComponentComponent,
    ChildToParentComponent,
    TwoWayBindingComponent,
    PipesComponent,
    TemplateDrivenFormComponent,
    ReactiveFormsComponent,
    NoPage404Component,
    AboutMyCollegeComponent,
    AboutMeComponent,
    FooterComponent,
    PostApiComponent,
    ModelInterfaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    UserAuthModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    ReactiveFormsModule,
    ForRoutingModule,
    ReactiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

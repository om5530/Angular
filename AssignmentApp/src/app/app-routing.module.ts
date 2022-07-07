import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleViewComponent } from './components/single-view/single-view.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

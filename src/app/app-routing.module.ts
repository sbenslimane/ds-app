import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { B2bColorComponent } from './b2b/b2b-color/b2b-color.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },

  {
    path: 'b2b/b2b-color',
    component: B2bColorComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

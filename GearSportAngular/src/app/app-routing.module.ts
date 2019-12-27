import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GearsComponent } from './components/gears/gears.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SportComponent } from './components/sport/sport.component';



const routes: Routes = [
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'sports',
    component: SportComponent
  },
  {
    path: 'gears',
    component: GearsComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GearsComponent } from './components/gears/gears.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SportsComponent } from './components/sports/sports.component';



const routes: Routes = [
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'sports',
    component: SportsComponent
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

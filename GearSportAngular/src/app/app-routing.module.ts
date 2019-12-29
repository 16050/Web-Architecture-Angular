import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GearsComponent } from './components/gears/gears.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SportsComponent } from './components/sports/sports.component';
import {SingleGearComponent} from './components/gears/single-gear/single-gear.component';
import {SingleCategoryComponent} from './components/categories/single-category/single-category.component';
import {SingleSportComponent} from './components/sports/single-sport/single-sport.component';



const routes: Routes = [
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'categories/:id',
    component: SingleCategoryComponent
  },

  {
    path: 'sports',
    component: SportsComponent
  },
  {
    path: 'sports/:id',
    component: SingleSportComponent
  },

  {
    path: 'gears',
    component: GearsComponent
  },
  {
    path: 'gears/:id',
    component: SingleGearComponent
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

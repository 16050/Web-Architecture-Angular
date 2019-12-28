import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GearsComponent } from './components/gears/gears.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SportsComponent } from './components/sports/sports.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SingleGearComponent } from './components/gears/single-gear/single-gear.component';
import { SingleSportComponent } from './components/sports/single-sport/single-sport.component';
import { SingleCategoryComponent } from './components/categories/single-category/single-category.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GearsComponent,
    CategoriesComponent,
    SportsComponent,
    SingleGearComponent,
    SingleSportComponent,
    SingleCategoryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

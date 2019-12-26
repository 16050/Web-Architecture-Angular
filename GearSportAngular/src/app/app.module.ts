import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GearComponent } from './gear/gear.component';
import { CategoryComponent } from './category/category.component';
import { SportComponent } from './sport/sport.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GearComponent,
    CategoryComponent,
    SportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

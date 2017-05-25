import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { HeroComponent } from './hero.component';
import { FooterComponent } from './footer.component';

const rain: string = "rain";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'hero',     component: HeroComponent }
];



@NgModule({
  imports:      [ BrowserModule,  RouterModule.forRoot(routes, { useHash: false}) ],
  declarations: [ AppComponent, HomeComponent, HeroComponent, FooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

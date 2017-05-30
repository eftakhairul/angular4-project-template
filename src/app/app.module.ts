import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { HeroComponent } from './hero.component';
import { HeroDetailsComponent } from './hero-details.component';
import { FooterComponent } from './footer.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'hero',     component: HeroComponent }
];



@NgModule({
  imports:      [ BrowserModule, FormsModule,  RouterModule.forRoot(routes, { useHash: true}) ],
  declarations: [ AppComponent, HomeComponent, HeroComponent, FooterComponent, HeroDetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; 
import { RouterModule, Routes } from '@angular/router';


import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-details.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },  
  { path: 'heroes',     component: HeroesComponent }
];


@NgModule({
  imports:      [ BrowserModule,  
                  FormsModule, 
                  RouterModule.forRoot(routes)
                  ],
  declarations: [ AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

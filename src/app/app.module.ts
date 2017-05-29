import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; 
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-details.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { GithubComponent } from './github.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },  
  { path: 'heroes',     component: HeroesComponent },
  { path: 'github',     component: GithubComponent }
];


@NgModule({
  imports:      [ BrowserModule,  
                  FormsModule, 
                  RouterModule.forRoot(routes, {useHash: true}),
                  HttpModule,
                  JsonpModule],
  declarations: [ AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent, GithubComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

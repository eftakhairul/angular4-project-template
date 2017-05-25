import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: ` <h1>{{ title }}</h1>
                <nav>
                    <a [routerLink]="['/home']">Home</a>
                    <a [routerLink]="['/hero']">Heroes</a>
                </nav>
                <router-outlet></router-outlet>`
})
export class AppComponent  {

    title: string = "Welcome to our app";
}
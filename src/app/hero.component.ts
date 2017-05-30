import { Component } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './services/heroes.service';




@Component({
    selector: 'my-hero',
    templateUrl: './src/app/views/hero.component.html',
    styleUrls: ['./src/app/styles/hero.component.css'],
    providers: [HeroService],
})
export class HeroComponent  {

    //class variable
    selectedHero: Hero = null;

    //class variable
    heroes: Hero[] = null;

    constructor(private hService: HeroService) {
        this.heroes = this.hService.getHeroes();
    }


    //class method
    onSelect(a: Hero): void {
        this.selectedHero = a;
    }

}

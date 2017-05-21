import { Component } from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './services/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './src/app/views/heroes.component.html',
  styleUrls: ['./src/app/styles/heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent  {
    title: string = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService) { 
        this.heroes = this.heroService.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}
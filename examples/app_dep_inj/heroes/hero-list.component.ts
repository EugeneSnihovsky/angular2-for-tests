import { Component }   from 'angular2/core';
import { Hero }        from './hero';
import { HeroService } from './hero.service';

import { Inject }   from 'angular2/core';

import {APP_CONFIG} from '../app-config';

@Component({
    selector: 'hero-list',
    template: `
  <div *ngFor="#hero of heroes">
    {{hero.id}} - {{hero.name}}
  </div>
  `,
    providers:[HeroService]
})
export class HeroListComponent {
    heroes: Hero[];

    constructor(heroService: HeroService, @Inject(APP_CONFIG) private _config: Config) {
    console.log('Объект из подключенного провайдера не класса = ', _config)
        this.heroes = heroService.getHeroes();
    }
}
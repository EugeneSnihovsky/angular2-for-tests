import {Hero} from './hero';
import {HEROES} from './mock-heroes';

import {AppComponent} from './AppComponent***';
import {bootstrap} from './bootstrap***';

class HeroService {
    heroes: Hero[];

    constructor() {
        this.heroes = HEROES;
    }

    getHeroes() {
        return this.heroes;
    }
}

// подключение сервиса
bootstrap(AppComponent, [HeroService]);

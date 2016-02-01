import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroesComponent} from './heroes/heroes.component';
import {Logger} from './logger.service';

@Component({
    selector: 'my-app',
    directives: [HeroesComponent],
    providers: [Logger], // добавляем сервис логирования на верхнем уровне, чтобы он был доступен на всех нижних
    template: `
    <h1>My heroes</h1>

    <my-heroes></my-heroes>
    `,
    styles: ['']
})
export class AppComponent {

    constructor() { // можно и без верхних строк, без constructor и this, но так нагляднее

    }
}
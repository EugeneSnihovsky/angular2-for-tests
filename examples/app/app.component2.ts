import {Component} from 'angular2/core';

@Component({
    selector: 'other-component',
    template: `
    <h1 class="primary">Some other h1 tag</h1>
    `
})

export class AppComponent2 {
    /*
    title: string;
    heroes: [Hero];
    myHero: Hero;
    onClickMe: Function;

    constructor() { // можно и без верхних строк, без constructor и this, но так нагляднее
        this.title = 'Tour of Heroes';
        this.heroes = [
            new Hero(1, 'Windstorm'),
            new Hero(2, 'Bombasto'),
            new Hero(3, 'Magneta'),
            new Hero(4, 'Tornado')];

        this.myHero = this.heroes[0];

        this.onClickMe = function () {
            this.title = 'Element clicked! ' + Math.random();
        }
    }
    */
}
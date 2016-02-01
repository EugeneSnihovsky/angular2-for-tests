import {Component} from 'angular2/core';
import {Hero} from './hero';
import {AppComponent2} from './app.component2';

@Component({
    selector: 'my-app',
    directives: [AppComponent2],
    template: `
    <h1 class="primary">{{title}}</h1>

    <other-component></other-component>

    <h2>My favorite hero is: {{myHero}}</h2>

    <p>Heroes:</p>
    <ul>
      <li *ngFor="#hero of heroes">
        {{ hero.name }}
      </li>
    </ul>

    <p *ngIf="heroes.length > 3">There are many heroes!</p>
    <button (click)="onClickMe()">Click me!</button>
    `,
    styles: ['.primary {color: red;}']
})
export class AppComponent {
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
}
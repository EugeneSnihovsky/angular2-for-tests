import {Component} from 'angular2/core';

import  {InsideComponent} from './inside';

@Component({
    selector: 'my-app',
    directives: [InsideComponent],
    template: `
    <h1 class="primary" (click)="onClickMe()">{{title}}</h1>

    <p (click)="a1=25">The sum of 1 + 1 is not {{1 + 1 + getVal()}}</p>

    <div (deleted)="log($event)">some div</div>
    <p>{{a1}}</p>

    <inside-component (deleted)="log($event)"></inside-component>
    `,
    styles: ['.primary {color: red;}']
})
export class BaseComponent {
    title: string;
    onClickMe: Function;
    getVal: Function;
    log: Function;
    a1: Object;

    constructor() { // можно и без верхних строк, без constructor и this, но так нагляднее
        this.title = 'Hello!';

        this.onClickMe = function () {
            alert('work');
        };

        this.getVal = function () {
            return 100;
        }

        this.log = function(event) {
            console.log(event);
            console.log('event work');
            return true;
        }
    }
}
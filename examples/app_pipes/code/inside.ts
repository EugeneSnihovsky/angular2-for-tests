import {Component} from 'angular2/core';
import {EventEmitter} from 'angular2/core';

import {ExponentialStrengthPipe} from './exponential';

import {AsyncPipeComponent} from './asyncPipe/test.component';

@Component({
    selector: 'inside-component',
    events: ['deleted'],
    directives: [AsyncPipeComponent],
    pipes: [ExponentialStrengthPipe],
    template: `
    <h2 class="primary" (click)="onDelete()" (deleted)="log()">Component work</h2>

    <p>The hero's birthday is {{ (birthday | date:format) | uppercase }}</p>

    <button (click)="toggleFormat()">Toggle Format</button>
    <p>{{format}}</p>
    <p>
      Exponent from 2 to 5 = {{2 | exponentialStrength: 5}}
    </p>

    <p>
    {{delayedMessage | async}}
    </p>

    <async-div></async-div>
    `
})
export class InsideComponent {
    title: string;
    onDelete: Function;
    log: Function;
    a1: Object;
    birthday: Date;
    toggle:boolean;
    toggleFormat: Function;

    delayedMessage:Promise<string>;

    deleted = new EventEmitter<string>();

    constructor() { // можно и без верхних строк, без constructor и this, но так нагляднее

        this.onDelete = function() {
            console.log('click work');
            this.deleted.emit('deleted1');
        };
        this.log = function () {
            console.log(2);
        };

        this.birthday = new Date(1988,3,15); // April 15, 1988

        this.toggle = true; // start with true == shortDate

        this.toggleFormat = function() {
            this.toggle = !this.toggle;
        };

        this.delayedMessage = new Promise((resolve, reject) => {
            setTimeout(() => resolve('You are my Hero!'), 1500);
        });
    }


    get format() { return this.toggle ? 'shortDate' : 'fullDate'}

}
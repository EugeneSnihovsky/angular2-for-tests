import {Component} from 'angular2/core';

import {SomeService} from '../service';

@Component({
    providers: [SomeService],
    template: `
    <h1>{{title}}</h1>
    <h2>Array = {{arr}}</h2>
    `
})


export class FirstComponent {
    title: string;
    arr: [number];

    constructor(someService: SomeService) {
        this.title = 'This is first component';

        this.arr = someService.getArr();
        console.log(someService.getArr())
    }
}

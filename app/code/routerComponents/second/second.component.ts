import {Component} from 'angular2/core';
import {provide} from 'angular2/core';
import {SomeService} from '../service';

@Component({
    providers: [SomeService],
    template: `
    <h1 style="color: red;">{{title}}</h1>
    `
})


export class SecondComponent {
    title: string;

    constructor(someService: SomeService) {
        this.title = 'This is SECOND component';
        someService.setArr([1, 2, 3, 4, 5]);

        this.title = someService.getArr();
    }
}

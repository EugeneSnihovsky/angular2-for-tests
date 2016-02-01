import {Component} from 'angular2/core';

@Component({
    template: `
    <h1 style="color: green;">{{title}}</h1>
    `
})


export class ThirdComponent {
    title: string;

    constructor() {
        this.title = 'This is Third component'
    }
}

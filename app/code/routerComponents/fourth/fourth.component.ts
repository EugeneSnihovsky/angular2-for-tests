import {Component} from 'angular2/core';

@Component({
    template: `
    <h1 style="color: yellow;">{{title}}</h1>
    `
})


export class FourthComponent {
    title: string;

    constructor() {
        this.title = 'Some other fourth component'
    }
}

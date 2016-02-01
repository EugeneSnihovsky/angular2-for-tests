import {Component} from 'angular2/core';
import {FetchJsonPipe} from './fetch-json.pipe';

@Component({
    selector: 'async-div',
    pipes: [FetchJsonPipe],
    template: `
    <h1 class="primary">work</h1>

    <p>
    {{'package.json' | fetch | json}}
    </p>
    `
})
export class AsyncPipeComponent {


    constructor() { // можно и без верхних строк, без constructor и this, но так нагляднее

    }
}
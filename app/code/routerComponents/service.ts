//import {AppComponent} from './AppComponent***';

import {Injectable} from 'angular2/core';

@Injectable()

export class SomeService {
    getArr: Function;
    setArr: Function;
    arr: [number];

    constructor() {
         this.getArr = function () {
         return this.arr;
         };

         this.setArr = function (arr) {
             this.arr = [];

             for(let i = 0; i < arr.length; i++) {
                 this.arr[i] = arr[i];
             }
         };
    }
}

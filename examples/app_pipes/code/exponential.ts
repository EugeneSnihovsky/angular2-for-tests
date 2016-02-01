import {Pipe, PipeTransform} from 'angular2/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
 */

@Pipe({name: 'exponentialStrength'})

export class ExponentialStrengthPipe implements PipeTransform {
    transform(value:number, args:string[]) : any {

        console.log('что принимает фильтр ', value, args);
        return Math.pow(value, parseInt(args[0] || '1', 10));
    }
}
import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, Location} from 'angular2/router';

import {FirstComponent} from './routerComponents/first/first.component';
import {SecondComponent} from './routerComponents/second/second.component';
import {ThirdComponent} from './routerComponents/third/third.component';
import {FourthComponent} from './routerComponents/fourth/fourth.component';

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    template: `
    <h1>Hello world! Routing</h1>

    <nav>
        <ul>
            <li> <a [routerLink]="['FirstComponent']">First component</a> </li>
            <li> <a (click)="goToComponent(['SecondComponent'])">Second component</a> </li>
            <li> <a (click)="goToComponent(['ThirdComponent', {id: 1}])">Third component from component</a> </li>
            <li> <a [routerLink]="['ThirdComponent', {id: 1}]">Third component from html</a> </li>
            <li> <a (click)="goToLocation('/fourth')">Fourth component</a> </li>
        </ul>
    </nav>

    <!-- Routed views go here -->
    <router-outlet></router-outlet>
    `
})

@RouteConfig([
    {path:'/first',     name: 'FirstComponent',  component: FirstComponent},
    {path:'/second',    name: 'SecondComponent', component: SecondComponent},
    {path:'/third/:id', name: 'ThirdComponent',  component: ThirdComponent},
    {path:'/fourth',    name: 'FourthComponent', component: FourthComponent}
])

export class BaseComponent {
    goToComponent: Function;
    goToLocation: Function;

    router: Router;

    constructor(_router:Router, location:Location) {
        this.router = _router;

        this.goToComponent = function(state) {
            this.router.navigate(state);
        };

        this.goToLocation = function(url) {
            location.go(url);
        }
    }
}
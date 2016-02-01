System.register(['angular2/core', 'angular2/router', './routerComponents/first/first.component', './routerComponents/second/second.component', './routerComponents/third/third.component', './routerComponents/fourth/fourth.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, first_component_1, second_component_1, third_component_1, fourth_component_1;
    var BaseComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (first_component_1_1) {
                first_component_1 = first_component_1_1;
            },
            function (second_component_1_1) {
                second_component_1 = second_component_1_1;
            },
            function (third_component_1_1) {
                third_component_1 = third_component_1_1;
            },
            function (fourth_component_1_1) {
                fourth_component_1 = fourth_component_1_1;
            }],
        execute: function() {
            BaseComponent = (function () {
                function BaseComponent(_router, location) {
                    this.router = _router;
                    this.goToComponent = function (state) {
                        this.router.navigate(state);
                    };
                    this.goToLocation = function (url) {
                        location.go(url);
                    };
                }
                BaseComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n    <h1>Hello world! Routing</h1>\n\n    <nav>\n        <ul>\n            <li> <a [routerLink]=\"['FirstComponent']\">First component</a> </li>\n            <li> <a (click)=\"goToComponent(['SecondComponent'])\">Second component</a> </li>\n            <li> <a (click)=\"goToComponent(['ThirdComponent', {id: 1}])\">Third component from component</a> </li>\n            <li> <a [routerLink]=\"['ThirdComponent', {id: 1}]\">Third component from html</a> </li>\n            <li> <a (click)=\"goToLocation('/fourth')\">Fourth component</a> </li>\n        </ul>\n    </nav>\n\n    <!-- Routed views go here -->\n    <router-outlet></router-outlet>\n    "
                    }),
                    router_1.RouteConfig([
                        { path: '/first', name: 'FirstComponent', component: first_component_1.FirstComponent },
                        { path: '/second', name: 'SecondComponent', component: second_component_1.SecondComponent },
                        { path: '/third/:id', name: 'ThirdComponent', component: third_component_1.ThirdComponent },
                        { path: '/fourth', name: 'FourthComponent', component: fourth_component_1.FourthComponent }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.Location])
                ], BaseComponent);
                return BaseComponent;
            })();
            exports_1("BaseComponent", BaseComponent);
        }
    }
});
//# sourceMappingURL=base.component.js.map
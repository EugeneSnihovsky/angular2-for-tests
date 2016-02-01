System.register(['angular2/core', './exponential', './asyncPipe/test.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2, exponential_1, test_component_1;
    var InsideComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (exponential_1_1) {
                exponential_1 = exponential_1_1;
            },
            function (test_component_1_1) {
                test_component_1 = test_component_1_1;
            }],
        execute: function() {
            InsideComponent = (function () {
                function InsideComponent() {
                    this.deleted = new core_2.EventEmitter();
                    this.onDelete = function () {
                        console.log('click work');
                        this.deleted.emit('deleted1');
                    };
                    this.log = function () {
                        console.log(2);
                    };
                    this.birthday = new Date(1988, 3, 15); // April 15, 1988
                    this.toggle = true; // start with true == shortDate
                    this.toggleFormat = function () {
                        this.toggle = !this.toggle;
                    };
                    this.delayedMessage = new Promise(function (resolve, reject) {
                        setTimeout(function () { return resolve('You are my Hero!'); }, 1500);
                    });
                }
                Object.defineProperty(InsideComponent.prototype, "format", {
                    get: function () { return this.toggle ? 'shortDate' : 'fullDate'; },
                    enumerable: true,
                    configurable: true
                });
                InsideComponent = __decorate([
                    core_1.Component({
                        selector: 'inside-component',
                        events: ['deleted'],
                        directives: [test_component_1.AsyncPipeComponent],
                        pipes: [exponential_1.ExponentialStrengthPipe],
                        template: "\n    <h2 class=\"primary\" (click)=\"onDelete()\" (deleted)=\"log()\">Component work</h2>\n\n    <p>The hero's birthday is {{ (birthday | date:format) | uppercase }}</p>\n\n    <button (click)=\"toggleFormat()\">Toggle Format</button>\n    <p>{{format}}</p>\n    <p>\n      Exponent from 2 to 5 = {{2 | exponentialStrength: 5}}\n    </p>\n\n    <p>\n    {{delayedMessage | async}}\n    </p>\n\n    <async-div></async-div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], InsideComponent);
                return InsideComponent;
            })();
            exports_1("InsideComponent", InsideComponent);
        }
    }
});
//# sourceMappingURL=inside.js.map
System.register(['angular2/core', './inside'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, inside_1;
    var BaseComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (inside_1_1) {
                inside_1 = inside_1_1;
            }],
        execute: function() {
            BaseComponent = (function () {
                function BaseComponent() {
                    this.title = 'Hello!';
                    this.onClickMe = function () {
                        alert('work');
                    };
                    this.getVal = function () {
                        return 100;
                    };
                    this.log = function (event) {
                        console.log(event);
                        console.log('event work');
                        return true;
                    };
                }
                BaseComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [inside_1.InsideComponent],
                        template: "\n    <h1 class=\"primary\" (click)=\"onClickMe()\">{{title}}</h1>\n\n    <p (click)=\"a1=25\">The sum of 1 + 1 is not {{1 + 1 + getVal()}}</p>\n\n    <div (deleted)=\"log($event)\">some div</div>\n    <p>{{a1}}</p>\n\n    <inside-component (deleted)=\"log($event)\"></inside-component>\n    ",
                        styles: ['.primary {color: red;}']
                    }), 
                    __metadata('design:paramtypes', [])
                ], BaseComponent);
                return BaseComponent;
            })();
            exports_1("BaseComponent", BaseComponent);
        }
    }
});
//# sourceMappingURL=base.component.js.map
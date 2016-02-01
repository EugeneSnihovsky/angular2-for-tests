System.register(['angular2/core', '../service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, service_1;
    var FirstComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            }],
        execute: function() {
            FirstComponent = (function () {
                function FirstComponent(someService) {
                    this.title = 'This is first component';
                    this.arr = someService.getArr();
                    console.log(someService.getArr());
                }
                FirstComponent = __decorate([
                    core_1.Component({
                        providers: [service_1.SomeService],
                        template: "\n    <h1>{{title}}</h1>\n    <h2>Array = {{arr}}</h2>\n    "
                    }), 
                    __metadata('design:paramtypes', [service_1.SomeService])
                ], FirstComponent);
                return FirstComponent;
            })();
            exports_1("FirstComponent", FirstComponent);
        }
    }
});
//# sourceMappingURL=first.component.js.map
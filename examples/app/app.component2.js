System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent2;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent2 = (function () {
                function AppComponent2() {
                }
                AppComponent2 = __decorate([
                    core_1.Component({
                        selector: 'other-component',
                        template: "\n    <h1 class=\"primary\">Some other h1 tag</h1>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent2);
                return AppComponent2;
            })();
            exports_1("AppComponent2", AppComponent2);
        }
    }
});
//# sourceMappingURL=app.component2.js.map
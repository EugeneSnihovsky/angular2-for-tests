System.register(['angular2/core', './hero.service', '../app-config'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, hero_service_1, core_2, app_config_1;
    var HeroListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (app_config_1_1) {
                app_config_1 = app_config_1_1;
            }],
        execute: function() {
            HeroListComponent = (function () {
                function HeroListComponent(heroService, _config) {
                    this._config = _config;
                    console.log('Объект из подключенного провайдера не класса = ', _config);
                    this.heroes = heroService.getHeroes();
                }
                HeroListComponent = __decorate([
                    core_1.Component({
                        selector: 'hero-list',
                        template: "\n  <div *ngFor=\"#hero of heroes\">\n    {{hero.id}} - {{hero.name}}\n  </div>\n  ",
                        providers: [hero_service_1.HeroService]
                    }),
                    __param(1, core_2.Inject(app_config_1.APP_CONFIG)), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService, Object])
                ], HeroListComponent);
                return HeroListComponent;
            })();
            exports_1("HeroListComponent", HeroListComponent);
        }
    }
});
//# sourceMappingURL=hero-list.component.js.map
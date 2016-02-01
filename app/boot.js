System.register(['angular2/platform/browser', 'angular2/router', './code/base.component'], function(exports_1) {
    var browser_1, router_1, base_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (base_component_1_1) {
                base_component_1 = base_component_1_1;
            }],
        execute: function() {
            //import {SomeService} from './code/routerComponents/service';
            browser_1.bootstrap(base_component_1.BaseComponent, [
                router_1.ROUTER_PROVIDERS //, SomeService
            ]);
        }
    }
});
/* // задание базового адреса, если нет доступа к index.html (вместо <base href="/" />)
import {provide} from 'angular2/core';
import {PathLocationStrategy, APP_BASE_HREF} from 'angular2/router';

bootstrap(BaseComponent, [
    ROUTER_PROVIDERS,
    PathLocationStrategy,
    provide(APP_BASE_HREF, {useValue: '/'})
]);
*/
/*// навигация через хэш #
import {provide}           from 'angular2/core';
import {LocationStrategy,
    HashLocationStrategy} from 'angular2/router';

bootstrap(BaseComponent, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy,
        {useClass: HashLocationStrategy})
]);
*/ 
//# sourceMappingURL=boot.js.map
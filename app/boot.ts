import {bootstrap}    from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router';

import {BaseComponent} from './code/base.component'

//import {SomeService} from './code/routerComponents/service';

bootstrap(BaseComponent, [
    ROUTER_PROVIDERS//, SomeService
]);

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
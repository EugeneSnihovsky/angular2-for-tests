import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {HeroService} from './heroes/hero.service'

import {provide} from 'angular2/core';

import {CONFIG} from './app-config';
import {APP_CONFIG} from './app-config';


bootstrap(AppComponent, [provide(APP_CONFIG, {useValue: CONFIG})]);

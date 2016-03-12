import 'es6-shim';
import 'es6-promise';
import 'angular2/bundles/angular2-polyfills'
import {provide} from 'angular2/core';
import {ROUTER_PROVIDERS, APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {bootstrap} from 'angular2/platform/browser'

import {AppComponent} from './app/app.component'
import {LocalStorageService} from './app/services/localStorage.service'

bootstrap(
  AppComponent,
  [
    LocalStorageService,
    ROUTER_PROVIDERS,
    provide(APP_BASE_HREF, {useValue: '/'}),
    provide(LocationStrategy, {useClass: HashLocationStrategy})
  ]
);

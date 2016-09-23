'use strict'

//import 'es6-shim'
//import 'es6-promise'
import 'babel-polyfill'
import 'angular2/bundles/angular2-polyfills'
import {provide, enableProdMode} from 'angular2/core'
import {ROUTER_PROVIDERS, APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from 'angular2/router'
import {bootstrap} from 'angular2/platform/browser'

import {AppComponent} from './app/app.component'

enableProdMode()

bootstrap(
  AppComponent,
  [
    ROUTER_PROVIDERS,
    provide(APP_BASE_HREF, {useValue: '/'}),
    provide(LocationStrategy, {useClass: HashLocationStrategy})
  ]
)

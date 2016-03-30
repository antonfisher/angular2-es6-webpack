'use strict';

import {Component, View} from 'angular2/core'
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router'

import {DashboardComponent} from './components/dashboard/dashboard.component'
import {AboutComponent} from './components/about/about.component'
import './app.component.scss'

@Component({
  selector: 'app'
})
@View({
  directives: [ROUTER_DIRECTIVES],
  template: `
    <h1>Search Algorithms Visualizations</h1>
    <nav id="nav">
      <a [routerLink]="['./Dashboard']">Home</a>
      <a [routerLink]="['./About']">About</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
@RouteConfig([
  {path: '/', component: DashboardComponent, as: 'Dashboard'},
  {path: '/about', component: AboutComponent, as: 'About'}
])
export class AppComponent {
}

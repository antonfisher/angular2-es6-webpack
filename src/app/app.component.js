'use strict'

import {Component} from 'angular2/core'
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router'

import {DashboardComponent} from './components/dashboard/dashboard.component'
import {AboutComponent} from './components/about/about.component'
import './app.component.scss'

@Component({
  selector: 'app',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <h1>Algorithms Visualizations</h1>
    <nav id="nav">
      <a [routerLink]="['./Dashboard']">Search algorithms</a>
      <a [routerLink]="['./About']">About</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
@RouteConfig([
  {path: '/', component: DashboardComponent, name: 'Dashboard', useAsDefault: true},
  {path: '/about', component: AboutComponent, name: 'About'}
])
export class AppComponent {
}

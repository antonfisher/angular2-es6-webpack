import {Component, View} from 'angular2/core'
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router'

import {PostComponent} from './components/post.component'
import {PostListComponent} from './components/postList.component'

import {PostsService} from './services/posts.service'

import './app.component.scss'

@Component({
  selector: 'app',
  providers: [PostsService]
})
@View({
  directives: [ROUTER_DIRECTIVES, PostListComponent],
  template: `
    <h1>{{ name }}</h1>
    <nav>
      <a [routerLink]="['./PostList']">Post List</a>
    </nav>
    <br>
    <br>
    <router-outlet></router-outlet>
  `
})
@RouteConfig([
  {path: '/', component: PostListComponent, as: 'PostList'},
  {path: '/post/:name', component: PostComponent, as: 'Post'}
])
export class AppComponent {
  constructor () {
    this.name = 'My application'
  }
}

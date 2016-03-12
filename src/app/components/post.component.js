import {Component, View} from 'angular2/core'
import {RouteParams} from 'angular2/router'

import {PostsService} from '../services/posts.service'
import {EditorComponent} from '../components/editor.component'

@Component({
  selector: 'app-post'
})
@View({
  directives: [EditorComponent],
  template: `
    <b>Post: {{ title }} ({{ post }})</b>
    <app-editor [title]="title"></app-editor>
  `
})
export class PostComponent {

  // 'parameters' instead of '@Inject' in TypeScript
  static get parameters () {
    return [[RouteParams], [PostsService]]
  }

  constructor (RouteParams, PostService) {
    this.title = RouteParams.get('name')
    this.post = PostService.getPost(this.title)
  }

}

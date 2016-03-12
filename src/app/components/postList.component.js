import {NgFor} from 'angular2/common'
import {Component, View} from 'angular2/core'
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {PostsService} from '../services/posts.service'

@Component({
  selector: 'app-post-list'
})
@View({
  directives: [ROUTER_DIRECTIVES, NgFor],
  template: `
    <b>Add new post:</b>
    <input #newPost type="text" /><button (click)="addPost(newPost.value)">Add</button>
    <br>
    <br>
    <b>Posts:</b>
    <ul>
      <li *ngFor="#title of titles">
        <a [routerLink]="['/Post', {name: title}]">{{ title }}</a>
      </li>
    </ul>
  `
})
export class PostListComponent {

  static get parameters () {
    return [[PostsService]]
  }

  constructor (PostService) {
    this.postService = PostService
  }

  ngOnInit () {
    this.titles = this.postService.getTitles() || []
  }

  addPost (title) {
    this.titles.push(title)
    this.postService.savePost(title, '')
  }
}

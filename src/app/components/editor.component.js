import {Component, View} from 'angular2/core'

import {PostsService} from '../services/posts.service'
import {MarkdownService} from '../services/markdown.service'

import './editor.component.scss'

@Component({
  selector: 'app-editor',
  bindings: [MarkdownService],
  inputs: ['title']
})
@View({
  template: `
    <div class="container">
      <div class="one-half col">
          <h2>{{ title }}</h2>
          <p>Edit:</p>
          <textarea #rawMarkdown (keyup)="updateValue(rawMarkdown.value)" [value]="initValue"></textarea>
          <br />
          <button class="button" (click)="savePost(rawMarkdown.value)">Save</button>
          <button class="button" (click)="clearPost()">Clear</button>
          <p>Result:</p>
          <div innerHtml="{{ html }}"></div>
      </div>
    </div>
  `
})
export class EditorComponent {

  // 'parameters' instead of '@Inject' in TypeScript
  static get parameters () {
    return [[PostsService], [MarkdownService]];
  }

  constructor (PostService, MarkdownService) {
    this.md = MarkdownService
    this.postService = PostService

    this.html = ''
  }

  ngOnInit () {
    this.initValue = this.postService.getPost(this.title)
    this.updateValue(this.initValue || '')
  }

  updateValue (value) {
    this.html = (value ? this.md.convert(value) : '')
  }

  savePost (value) {
    this.postService.savePost(this.title, value)
  }

  clearPost () {
    this.postService.clearPost(this.title)
    this.updateValue('')
  }

}

import {Injectable} from 'angular2/core'
import {LocalStorageService} from '../services/localStorage.service'

@Injectable()
export class PostsService {

  static get parameters () {
    return [[LocalStorageService]]
  }

  constructor (LocalStorageService) {
    this.storage = LocalStorageService

    this.storageKey = 'app-posts'
    this.posts = {}

    this.getPosts()
  }

  getPosts () {
    this.posts = this.storage.get(this.storageKey) || {}

    return this.posts
  }

  getTitles () {
    let titles = []

    for (let title in this.posts) {
      titles.push(title)
    }

    return titles
  }

  getPost (title) {
    return this.posts[title]
  }

  savePost (title, post) {
    this.posts[title] = post
    this.storage.set(this.storageKey, this.posts)
  }

  deletePost (title) {
    delete this.posts[title]
    this.storage.set(this.storageKey, this.posts)
  }
}

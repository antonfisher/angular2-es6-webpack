export class LocalStorageService {
  constructor () {
    this.storage = localStorage
  }

  get (key) {
    const value = this.storage.getItem(key)

    if (typeof value !== 'undefined') {
      return JSON.parse(value)
    }
  }

  set (key, value) {
    this.storage.setItem(key, JSON.stringify(value))
  }
}

import * as marked from 'marked'

export class MarkdownService {
  constructor () {
    this.md = marked
    this.md.setOptions({})
  }

  convert (value) {
    return (value ? this.md.parse(value) : '')
  }

  setConfig (config) {
    this.md.setOptions(config)
  }
}

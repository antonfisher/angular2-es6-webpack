export class MarkdownService {
  constructor () {
  }

  convert (value) {
    return (value ? value.replace(/_([^_]+)_/g, '<i>$1</i>') : '')
  }

  setConfig (config) {
    this.md.setOptions(config)
  }
}

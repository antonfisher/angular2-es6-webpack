'use strict'

export class SearchBase {

  constructor () {
    this.title = '-'
  }

  search (sourceArray, searchValue) {
    this.done = false
    this.checkedItems = []
    this.sourceArray = sourceArray
    this.searchValue = searchValue
    this.searchGeneratorRun = null

    if (this.newSearchListener) {
      this.newSearchListener.fn.call(this.newSearchListener.scope || this)
    }
  }

  onTick (fn, scope) {
    this.tickListener = {fn, scope}
  }

  onNewSearch (fn, scope) {
    this.newSearchListener = {fn, scope}
  }

  tick () {
    this.searchGeneratorRun = (this.searchGeneratorRun || this.searchGenerator(this.sourceArray, this.searchValue))

    const tickResult = this.searchGeneratorRun.next()

    this.done = tickResult.done

    if (tickResult.value.checked !== null) {
      this.checkedItems.push(tickResult.value.checked)
    }

    if (this.tickListener) {
      this.tickListener.fn.call(
        this.tickListener.scope || this,
        {
          done: this.done,
          resultItem: (this.done ? tickResult.value.checked : null),
          checkedItems: this.checkedItems
        }
      )
    }
  }

  searchGenerator () {
    throw new Error('Not implemented')
  }

}

'use strict';

import {SearchBase} from './search-base'

export class LinealSearch extends SearchBase {

  constructor () {
    super()
    this.title = 'Linear Search'
  }

  *searchGenerator (arr, val) {
    let index = 0

    while (index < arr.length) {
      if (arr[index] === val) {
        return {checked: index}
      } else {
        yield {checked: index}
      }
      index++
    }

    return {checked: null}
  }

}

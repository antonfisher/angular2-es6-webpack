'use strict'

import {Injectable} from 'angular2/core'
import {SearchBase} from './search-base'

@Injectable()
export class LinealSearch extends SearchBase {

  constructor () {
    super()
    this.title = 'Linear Search'
  }

  * searchGenerator (arr, val) {
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

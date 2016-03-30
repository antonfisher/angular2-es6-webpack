'use strict';

import {SearchBase} from './search-base'

export class BinarySearch extends SearchBase {

  constructor () {
    super()
    this.title = 'Binary Search'
  }

  *searchGenerator (arr, val) {
    let min = 0;
    let max = (arr.length - 1)

    while (arr[min] < val && val < arr[max]) {
      const index = (min + Math.round((max - min) / 2))

      if (index === min || index === max || (max - min) === 1) {
        break
      } else if (val === arr[index]) {
        return {checked: index}
      } else if (val < arr[index]) {
        yield {checked: index}
        max = index
      } else if (val > arr[index]) {
        yield {checked: index}
        min = index
      } else {
        break
      }
    }

    if (val === arr[min]) {
      return {checked: min}
    } else if (val === arr[max]) {
      return {checked: max}
    } else {
      return {checked: null}
    }
  }

}

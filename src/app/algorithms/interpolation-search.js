'use strict'

import {Injectable} from 'angular2/core'
import {SearchBase} from './search-base'

@Injectable()
export class InterpolationSearch extends SearchBase {

  constructor () {
    super()
    this.title = 'Interpolation Search'
  }

  toBase27 (val, len) {
    let res = 0
    for (let i = 0; i < len; i++) {
      if (typeof val[i] !== 'undefined') {
        res += ((val[i] === ' ' ? 0 : (val.charCodeAt(i) - 96)) * Math.pow(27, (len - 1 - i)))
      }
    }
    return res
  }

  * searchGenerator (arr, val) {
    let min = 0
    let max = (arr.length - 1)

    const base27Val = this.toBase27(val, max)
    const base27Arr = arr.map((i) => this.toBase27(i, max))

    while (val >= arr[min] && val <= arr[max] && arr[min] !== arr[max]) {
      const index = Math.round(
        min + ((base27Val - base27Arr[min]) * (max - min) / (base27Arr[max] - base27Arr[min]))
      )

      if (val === arr[index]) {
        return {checked: index}
      } else if (base27Val < base27Arr[index]) {
        yield {checked: index}
        max = index - 1
      } else if (base27Val > base27Arr[index]) {
        yield {checked: index}
        min = index + 1
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

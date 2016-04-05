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
    for (let i = 0; i <= len; i++) {
      if (typeof val[i] !== 'undefined') {
        res += ((val[i] === ' ' ? 0 : (val.charCodeAt(i) - 96)) * Math.pow(27, (len - i)))
      }
    }
    return res
  }

  * searchGenerator (arr, val) {
    let min = 0
    let max = (arr.length - 1)

    const maxLength = Math.max.apply(Math, (arr.map((i) => i.length)));
    const toBase27 = ((i) => this.toBase27(i, maxLength))
    const base27Val = toBase27(val)

    while (val >= arr[min] && val <= arr[max] && arr[min] !== arr[max]) {
      const index = Math.round(
        min + ((base27Val - toBase27(arr[min])) * (max - min) / (toBase27(arr[max]) - toBase27(arr[min])))
      )

      if (val === arr[index]) {
        return {checked: index}
      } else if (base27Val < toBase27(arr[index])) {
        yield {checked: index}
        max = index - 1
      } else if (base27Val > toBase27(arr[index])) {
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

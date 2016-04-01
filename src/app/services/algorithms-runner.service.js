'use strict'

import {Injectable} from 'angular2/core'

@Injectable()
export class AlgorithmsRunnerService {

  constructor () {
    this.done = true
    this.runners = []
  }

  add (runner) {
    this.runners.push(runner)
  }

  search (sourceArray, searchValue) {
    this.done = false
    for (let runner of this.runners) {
      runner.search(sourceArray, searchValue)
    }
  }

  tick () {
    let done = true
    for (let runner of this.runners) {
      if (!runner.done) {
        runner.tick()
        done = false
      }
    }
    this.done = done
  }

}

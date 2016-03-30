'use strict';

import {Component, View} from 'angular2/core'

import {DefaultValuesService} from '../../services/default-values.service'
import {AlgorithmsRunnerService} from '../../services/algorithms-runner.service'
import {RunnerResultComponent} from '../../components/runner-result/runner-result.component'
import './dashboard.component.scss'

import {LinealSearch} from '../../algorithms/linear-search'
import {BinarySearch} from '../../algorithms/binary-search'
import {InterpolationSearch} from '../../algorithms/interpolation-search'

@Component({
  selector: 'app-dashboard',
  providers: [DefaultValuesService, AlgorithmsRunnerService]
})
@View({
  directives: [RunnerResultComponent],
  template: `
    <h3>Search for #{{searchIndex}} "{{searchValue}}"</h3>
    <div *ngFor="#runner of runners">
        <app-runner-result [sourceArray]= "sourceArray" [runner]="runner"></app-runner-result>
    </div>
  `
})
export class DashboardComponent {

  static get parameters () {
    return [[DefaultValuesService], [AlgorithmsRunnerService]]
  }

  constructor (DefaultValuesService, AlgorithmsRunnerService) {
    this.sourceArray = DefaultValuesService.starsArray
    this.searchIndex = ''
    this.searchValue = ''

    AlgorithmsRunnerService.add(new LinealSearch())
    AlgorithmsRunnerService.add(new BinarySearch())
    AlgorithmsRunnerService.add(new InterpolationSearch())

    var runInterval = setInterval(() => {
      if (AlgorithmsRunnerService.done) {
        const randomValue = this.getRandomValue(this.sourceArray)
        this.searchIndex = randomValue.index
        this.searchValue = randomValue.value
        AlgorithmsRunnerService.search(this.sourceArray, this.searchValue)
      }
      AlgorithmsRunnerService.tick()
    }, 500)

    this.runners = AlgorithmsRunnerService.runners
  }

  getRandomValue (arr) {
    const index = Math.round((arr.length - 1) * Math.random())
    return {
      index,
      value: arr[index]
    }
  }

}

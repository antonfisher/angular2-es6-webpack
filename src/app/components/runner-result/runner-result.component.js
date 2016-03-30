'use strict';

import {Component, View, ElementRef} from 'angular2/core'

import './runner-result.component.scss'

@Component({
  selector: 'app-runner-result',
  inputs: ['runner', 'sourceArray']
})
@View({
  template: `
    <div class="titles-container">
        <label>{{runner.title}}</label>
        <div class="info">
            Iterations: <b class="{{iterationsClass}}">{{iterations}}</b>
        </div>
        <div class="clear"></div>
    </div>
    <div class="source-array-items-container">
      <table (window:resize)="onResize()">
          <thead>
              <tr>
                <th *ngFor="#item of sourceArrayUI; #i=index" style="width:{{itemWidth}};max-width:{{itemWidth}}px;">
                    {{i}}
                </th>
              </tr>
          </thead>
          <tbody>
              <tr>
                <td *ngFor="#item of sourceArrayUI"
                    style="width:{{itemWidth}}px;max-width:{{itemWidth}}px;background-color:{{item.color}}"
                    [innerHTML]="item.value">
                  </td>
              </tr>
          </tbody>
      </table>
    </div>
    <div class="clear"></div>
  `
})
export class RunnerResultComponent {

  static get parameters () {
    return [[ElementRef]]
  }

  constructor (el) {
    this.runner = null
    this.itemWidth = 1
    this.iterations = 0
    this.iterationsClass = ''
    this.sourceArrayUI = []
    this.defaultColor = '#003333'
    this.el = el.nativeElement
  }

  ngOnInit () {
    this.itemContainer = this.el.getElementsByClassName('source-array-items-container')[0]
    this.sourceArrayUI = this.sourceArray.map(i => {
      return {
        value: i.split('').join('<br>'),
        color: this.defaultColor
      }
    })

    this.runner.onNewSearch(this.onNewSearch, this)
    this.runner.onTick(this.onTick, this)
    this.calculateItems();
  }

  onResize () {
    this.calculateItems();
  }

  onNewSearch () {
    for (let item of this.sourceArrayUI) {
      item.color = this.defaultColor
    }
  }

  onTick (result) {
    this.iterations = result.checkedItems.length
    this.iterationsClass = (result.done ? 'done' : '')

    for (let index in result.checkedItems) {
      const colorStart = 0x99
      const colorEnd = 0xCC
      const color = Math.round(colorStart + (colorEnd - colorStart) * index / result.checkedItems.length).toString(16)
      const itemIndex = result.checkedItems[index]
      if (this.sourceArrayUI[itemIndex]) {
        this.sourceArrayUI[itemIndex].color = ('#00' + color + color)
      }
    }

    if (result.resultItem) {
      this.sourceArrayUI[result.resultItem].color = '#B8860B'
    }
  }

  calculateItems () {
    this.itemWidth = (this.itemContainer.clientWidth / this.sourceArray.length - 4)
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MainComponent } from '../main.component'

@Component({
  selector: 'app-analytic',
  templateUrl: './analytic.component.html',
  styleUrls: ['./analytic.component.css']
})
export class AnalyticComponent implements OnInit {

  @Input() popular: any;
  @Output() onChanged = new EventEmitter<boolean>();
  change() {
    this.main.main = true;
    this.onChanged.emit();
  }

  popularPizzas = [];
  popularIngridients = [];

  constructor(private main: MainComponent) { }

  ngOnInit(): void {
    this.getPopularPizzas();
    this.getPopularIngredients();
  }

  getPopularPizzas() {
    this.popularPizzas = [];
    let arrayNames = [];
    let result = {};
    this.popular.forEach(element => {
      arrayNames.push(element.key);
    });

    arrayNames.forEach(function (a) {
      if (result[a] != undefined)
        ++result[a];
      else
        result[a] = 1;
    });

    for (var meal in result) {
      this.popularPizzas.push([meal, result[meal]]);
    }

    this.popularPizzas.sort(function (a, b) {
      return b[1] - a[1];
    });

    this.popularPizzas = this.popularPizzas.slice(0, 5);
  }

  getPopularIngredients() {
    this.popularIngridients = [];
    let ingrName = [];

    this.popular.forEach(element => {
      Object.keys(element).map(function (key) {
        ingrName.push({ key: key, value: element[key] });
      });
    });

    for (let index = 0; index < ingrName.length; index++) {
      if (typeof ingrName[index].value == "string") {
        ingrName.splice(index, 1);
      }
    }

    let temp = {};
    let obj = null;
    for (var i = 0; i < ingrName.length; i++) {
      obj = ingrName[i];

      if (!temp[obj.key]) {
        temp[obj.key] = obj;
      } else {
        temp[obj.key].value += obj.value;
      }
    }

    for (var prop in temp)
      this.popularIngridients.push(temp[prop]);
    this.popularIngridients.sort(function (a, b) {
      return b.value - a.value;
    });

    this.popularIngridients = this.popularIngridients.slice(0, 5);
  }

}

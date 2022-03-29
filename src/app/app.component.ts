import { Component, OnInit} from '@angular/core';
import { isBoolean, mapValues, uniq } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-crash';
  lib = { categories: [
    'Performance', 'Investments', 'Operations' ],
    applets: [ {
    name: 'Performance Snapshot',
    categories: ['Performance'] },
    {
    name: 'Commitment Widget', categories: ['Investments']
    }, {
    name: 'CMS',
    categories: ['Investments', 'Performance' ] }
    ] };

    // For transforming the model, create a new model within the getModel() function: https://opensource.com/article/20/5/data-modeling-javascript

    categories: any = []
    applets: any = []
    selectedCategory: string = ''

    getModel() {
      let arr: any = []
      this.lib.applets.forEach(x => {
        x.categories.forEach(j => {
          arr.push(j)
        })
      })
      this.categories = uniq(arr)
    }

    getApplets() {
      this.lib.applets.forEach((x: any) => {
        console.log(x.categories, this.selectedCategory)
        if (x.categories.includes(this.selectedCategory)) {
          this.applets.push(x.name)
        }
        console.log('applets :', this.applets)
      })
      
    }

    setCategory(category: string) {
      this.applets = []
      this.selectedCategory = category
      console.log(this.selectedCategory)
      // if (this.selectedCategory === '') {
      //   this.selectedCategory = this.categories[0]
      //   console.log(this.categories)
      // } else {
      //   this.selectedCategory = category
      //   console.log(this.selectedCategory)
      // }
    }

    ngOnInit(): void {
      this.getModel()
      this.getApplets()
    }
}

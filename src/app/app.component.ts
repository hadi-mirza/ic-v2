import { Component, OnInit } from '@angular/core';
import { isBoolean, mapValues, uniq } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  lib = {
    categories: ['Performance', 'Investments', 'Operations'],
    applets: [
      {
        name: 'Performance Snapshot',
        categories: ['Performance'],
      },
      {
        name: 'Commitment Widget',
        categories: ['Investments'],
      },
      {
        name: 'CMS',
        categories: ['Investments', 'Performance'],
      },
    ],
  };

  // For transforming the model, create a new model within the getModel() function: https://opensource.com/article/20/5/data-modeling-javascript

  categories: string[] = [];
  applets: string[] = [];
  selectedCategory: string = '';
  searchValue: string = ''

  getCategories() {
    let arr: string[] = [];
    if (this.searchValue) {
      this.lib.applets.forEach((applet) => {
        applet.categories.forEach((category) => {
          arr.push(category);
        });
      });
    } else {
      this.lib.categories.forEach((mainCategory) => {
        arr.push(mainCategory);
      })
    }
    this.categories = uniq(arr);
  }

  getApplets() {
    this.lib.applets.forEach((applet: any) => {
      if (applet.categories.includes(this.selectedCategory)) {
        this.applets.push(applet.name);
      }
    });
  }

  setCategory(category: string) {
    this.applets = [];
    this.selectedCategory = category;
    // console.log(this.selectedCategory)
    // if (this.selectedCategory === '') {
    //   this.selectedCategory = this.categories[0]
    //   console.log(this.categories)
    // } else {
    //   this.selectedCategory = category
    //   console.log(this.selectedCategory)
    // }
  }

  ngOnInit(): void {
    this.getCategories();
    // this.getApplets();
    // let onLoad = this.categories[0].toString()
    // console.log(onLoad)
    // this.selectedCategory = onLoad
  }
}

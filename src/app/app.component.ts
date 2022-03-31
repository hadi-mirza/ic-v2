import { Component, OnInit } from '@angular/core';
import { isBoolean, mapValues, uniq, includes } from 'lodash';

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
      {
        name: 'Test1',
        categories: ['Investments', 'Operations'],
      },
      {
        name: 'Test 2',
        categories: ['Banking', 'Performance'],
      },
      {
        name: 'Test 3',
        categories: ['Banking', 'Operations'],
      },
    ],
  };

  categories: string[] = [];
  applets: string[] = [];
  selectedCategory: string = '';
  searchValue: string = '';
  activeTabIndex: number = 0;

  getCategories() {
    let arr: string[] = [];
    if (this.searchValue) {
      // This needs to be reduced
      this.lib.applets.forEach((applet) => {
        applet.categories.forEach((category) => {
          arr.push(category);
        });
      });
    } else {
      // This needs to be reduced
      this.lib.applets.forEach((applet) => {
        applet.categories.forEach((category) => {
          arr.push(category);
        });
      });
      this.lib.categories.forEach((mainCategory) => {
        arr.push(mainCategory);
      });
    }
    this.categories = uniq(arr);
  }

  getApplets() {
    this.applets = [];
    this.lib.applets.forEach((applet: any) => {
      if (
        applet.categories.includes(this.selectedCategory) &&
        applet.name.includes(this.searchValue)
      ) {
        this.applets.push(applet.name);
      }
    });
  }

  setCategory(category: string, index: number) {
    this.applets = [];
    this.selectedCategory = category;
    this.activeTabIndex = index;
  }

  ngOnInit(): void {
    this.getCategories();
    // console.log(this.categories[0]);
  }
}

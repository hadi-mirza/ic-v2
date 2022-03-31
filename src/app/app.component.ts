import { Component, OnInit } from '@angular/core';
import { uniq } from 'lodash';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  lib = {
    categories: ['Performance', 'Investments', 'Operations', 'Wealth'],
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
  searchControl = new FormControl();
  allCategories: string[] = [];

  constructor() {
    this.searchControl.valueChanges.subscribe((value) => {
      this.searchValue = value;
      value.length > 0
        ? this.getCategoriesWithApplets()
        : this.getAllCategories();
    });
  }

  getAllCategories() {
    this.getCategoriesWithApplets();
    this.lib.categories.map((mainCategories) =>
      this.allCategories.push(mainCategories)
    );
    this.categories = uniq(this.allCategories);
  }

  getCategoriesWithApplets() {
    this.allCategories = [];
    this.lib.applets.map((applet) => {
      applet.categories.map((category) => {
        this.allCategories.push(category);
      });
    });
    this.categories = uniq(this.allCategories);
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
    this.getApplets();
  }

  ngOnInit(): void {
    this.getAllCategories();
    this.selectedCategory = this.categories[0];
  }
}

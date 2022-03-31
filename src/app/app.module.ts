import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { SearchAppletPipe } from './pipes/searchapplet.pipe';

@NgModule({
  declarations: [AppComponent, CategoriesComponent, SearchAppletPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

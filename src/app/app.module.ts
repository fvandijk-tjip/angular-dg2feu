import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CheckboxesComponent } from './checkboxes/checkboxes.component';

import { TreeModule } from 'angular-tree-component'

@NgModule({
  imports:      [ BrowserModule, FormsModule, TreeModule.forRoot() ],
  declarations: [ AppComponent, HelloComponent, CheckboxesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

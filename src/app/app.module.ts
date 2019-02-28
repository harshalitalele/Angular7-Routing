import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Feature1Module } from '../Feature1/feature1.module';
import {Feature2Module} from '../Feature 2/feature2.module';
import { AppRouterModule } from './approuter.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Feature1Module,
    Feature2Module,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

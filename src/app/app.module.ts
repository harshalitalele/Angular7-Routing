import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewerModule } from '../viewer/viewer.module';
import {StudyModule} from '../study/study.module';
import { AppRouterModule } from './approuter.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ViewerModule,
    StudyModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

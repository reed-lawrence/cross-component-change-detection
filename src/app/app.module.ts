import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { AppStateService } from './services/app-state.service';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AppStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

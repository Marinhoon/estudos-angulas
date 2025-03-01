import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent
  ],

  import : {
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule
  },

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

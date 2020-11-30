import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AnimatedArrowsButtonComponent } from './animated-arrows-button.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [
    AnimatedArrowsButtonComponent,
    AppComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

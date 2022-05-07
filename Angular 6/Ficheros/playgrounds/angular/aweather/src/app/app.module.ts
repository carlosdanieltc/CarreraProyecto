import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { MatButtonModule,} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
  AppComponent,
  WeatherCardComponent
  ],
  imports: [
  BrowserModule,
  BrowserAnimationsModule,
  MatCardModule,
  MatButtonModule,
  MatDividerModule,
  MatGridListModule,
  MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  })
  export class AppModule { }

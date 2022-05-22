import { NgModule } from '@angular/core';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { WeatherLayoutModule } from '../layout/weather-layout.module';

@NgModule({
  imports: [
    // Routing
    WeatherRoutingModule,
    // Container
    WeatherLayoutModule
  ],
  declarations: [
    WeatherCardComponent,
    WeatherForecastComponent,
    WeatherSearchComponent
  ]
})
export class WeatherModule { }

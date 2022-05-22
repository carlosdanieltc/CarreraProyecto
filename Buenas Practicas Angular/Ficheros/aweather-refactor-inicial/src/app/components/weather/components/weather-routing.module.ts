import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherContainerComponent } from '../layout/container/weather-container.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';

const weatherRoutes: Routes = [
  {
    path: '',
    component: WeatherContainerComponent,
    children: [
      { path: 'search', component: WeatherSearchComponent },
      { path: 'info/:cityName', component: WeatherCardComponent, canActivate: [AuthGuardService] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(weatherRoutes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }

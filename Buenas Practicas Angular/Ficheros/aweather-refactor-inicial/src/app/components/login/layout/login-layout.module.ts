import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginContainerComponent } from './container/login-container.component';
import { RouterModule } from '@angular/router';
import { WeatherServiceModule } from '../../../services/weather-service/weather-service.module';
import { MaterialFormsModule } from '../../../ui-controls/material/material-forms.module';

@NgModule({
  imports: [
    RouterModule,
    // Services
    WeatherServiceModule,
    // Material and Forms module
    MaterialFormsModule,
    // Own Modules
  ],
  declarations: [
    LoginContainerComponent
  ],
  exports: [
    // Services
    WeatherServiceModule,
    // Material and Forms module
    MaterialFormsModule,
    // Own Modules
  ]
})
export class LoginLayoutModule { }

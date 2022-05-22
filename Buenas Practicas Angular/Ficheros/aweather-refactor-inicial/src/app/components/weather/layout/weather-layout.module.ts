import { NgModule } from '@angular/core';

import { WeatherContainerComponent } from './container/weather-container.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { RouterModule } from '@angular/router';
import { WeatherServiceModule } from '../../../services/weather-service/weather-service.module';
import { MaterialFormsModule } from '../../../ui-controls/material/material-forms.module';
import { AuthorizationModule } from '../../../core/authorization/authorization.module';
import { FormControlsModule } from '../../../ui-controls/form-controls/form-controls.module';
import { PipesModule } from '../../../ui-controls/pipes/pipes.module';
import { DirectivesModule } from '../../../ui-controls/directives/directives.module';

@NgModule({
  imports: [
    RouterModule,
    // Services
    WeatherServiceModule,
    AuthorizationModule,
    // Material and forms modules
    MaterialFormsModule,
    FormControlsModule,
    PipesModule,
    DirectivesModule
  ],
  declarations: [
    WeatherContainerComponent,
    LeftMenuComponent,
    TopMenuComponent
  ],
  exports: [
    // Services
    WeatherServiceModule,
    AuthorizationModule,
    // Material and forms modules
    MaterialFormsModule,
    FormControlsModule,
    PipesModule,
    DirectivesModule
  ]
})
export class WeatherLayoutModule { }

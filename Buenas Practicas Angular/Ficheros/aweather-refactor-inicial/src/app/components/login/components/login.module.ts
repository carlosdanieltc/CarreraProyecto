import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginCardComponent } from './login-card/login-card.component';
import { LoginLayoutModule } from '../layout/login-layout.module';

@NgModule({
  imports: [
    // Routes
    LoginRoutingModule,
    // Layout
    LoginLayoutModule
  ],
  declarations: [
    LoginCardComponent
  ]
})
export class LoginModule { }


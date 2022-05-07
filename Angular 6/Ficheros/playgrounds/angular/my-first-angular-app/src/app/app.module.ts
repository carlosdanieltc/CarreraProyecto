import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationInfoComponent } from './application-info/application-info.component';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [ApplicationInfoComponent]
})
export class AppModule { }

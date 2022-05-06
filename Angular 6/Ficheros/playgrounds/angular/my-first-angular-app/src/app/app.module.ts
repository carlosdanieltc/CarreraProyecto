import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationInfoComponent } from './application-info/application-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ApplicationInfoComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';//////////|
import { CommonModule } from '@angular/common';
import { LoginCardComponent } from './login-card/login-card.component';////|-- > Imports



@NgModule({////////////////////////////////////////|
  declarations: [
    LoginCardComponent
  ],////////////////////////////////|
  imports: [///////////////////////////////////////|
    CommonModule///////////////////////////////////| -- > Decorator
  ],////////////////////////////////////////////////|
  exports: [LoginCardComponent]
})/////////////////////////////////////////////////|


export class LoginModule { }///////////////////////| -- > Class

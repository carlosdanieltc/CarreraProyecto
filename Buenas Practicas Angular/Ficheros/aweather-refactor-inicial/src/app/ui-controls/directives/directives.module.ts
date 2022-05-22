import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdowntoggleDirective } from './menu-dropdown/dropdowntoggle.directive';
import { DropdownDirective } from './menu-dropdown/dropdown.directive';



@NgModule({
  declarations: [DropdowntoggleDirective,DropdownDirective ],
  imports: [
    CommonModule
  ],
  exports: [
    DropdowntoggleDirective,DropdownDirective
  ]
})
export class DirectivesModule { }

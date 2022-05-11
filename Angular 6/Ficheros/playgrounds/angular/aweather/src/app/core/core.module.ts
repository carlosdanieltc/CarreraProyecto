import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule
  ],
  declarations: [TopMenuComponent, LeftMenuComponent],
  exports: [TopMenuComponent, LeftMenuComponent]
})
export class CoreModule { }

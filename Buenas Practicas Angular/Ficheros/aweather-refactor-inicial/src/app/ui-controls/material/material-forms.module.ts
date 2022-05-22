import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatCardModule,
  MatButtonModule,
  MatDividerModule,
  MatGridListModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule
} from '@angular/material';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    // Material
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    // Forms
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: []
})
export class MaterialFormsModule { }

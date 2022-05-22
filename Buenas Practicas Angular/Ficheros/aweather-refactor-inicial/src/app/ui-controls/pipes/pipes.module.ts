import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CelsiusPipe } from './celsius/celsius.pipe';



@NgModule({
  declarations: [CelsiusPipe],
  imports: [
    CommonModule
  ],
  exports: [
    CelsiusPipe
  ]
})
export class PipesModule { }

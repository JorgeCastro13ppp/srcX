import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RojoRoutingModule } from './rojo-routing.module';
import { RojoComponent } from './rojo.component';


@NgModule({
  declarations: [
    RojoComponent
  ],
  imports: [
    CommonModule,
    RojoRoutingModule
  ]
})
export class RojoModule { }

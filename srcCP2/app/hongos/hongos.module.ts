import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HongosRoutingModule } from './hongos-routing.module';
import { SetaComponent } from './seta/seta.component';
import { ChampinonComponent } from './champinon/champinon.component';
import { GirgolaComponent } from './girgola/girgola.component';


@NgModule({
  declarations: [
    SetaComponent,
    ChampinonComponent,
    GirgolaComponent
  ],
  imports: [
    CommonModule,
    HongosRoutingModule
  ]
})
export class HongosModule { }

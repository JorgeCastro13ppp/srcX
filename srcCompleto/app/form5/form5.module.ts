import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Form5RoutingModule } from './form5-routing.module';
import { TemporizadorComponent } from './temporizador/temporizador.component';


@NgModule({
  declarations: [
  
    TemporizadorComponent
  ],
  imports: [
    CommonModule,
    Form5RoutingModule
  ]
})
export class Form5Module { }

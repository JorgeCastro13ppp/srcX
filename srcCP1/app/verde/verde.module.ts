import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerdeRoutingModule } from './verde-routing.module';
import { VerdeComponent } from './verde.component';


@NgModule({
  declarations: [
    VerdeComponent
  ],
  imports: [
    CommonModule,
    VerdeRoutingModule
  ]
})
export class VerdeModule { }

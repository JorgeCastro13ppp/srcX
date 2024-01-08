import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsirRoutingModule } from './asir-routing.module';
import { BdaComponent } from './bda/bda.component';
import { FhComponent } from './fh/fh.component';
import { LmComponent } from './lm/lm.component';
import { SorComponent } from './sor/sor.component';


@NgModule({
  declarations: [
    BdaComponent,
    FhComponent,
    LmComponent,
    SorComponent
  ],
  imports: [
    CommonModule,
    AsirRoutingModule
  ]
})
export class AsirModule { }

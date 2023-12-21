import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrecolComponent } from './brecol/brecol.component';
import { ColiflorComponent } from './coliflor/coliflor.component';
import { LombardaComponent } from './lombarda/lombarda.component';
import { RomaneskuComponent } from './romanesku/romanesku.component';

const routes: Routes = [
  {
    path:'brecol',
    component:BrecolComponent
  },
  {
       path:'lombarda',
       component:LombardaComponent
  },
  {
    path:'romanesku',
    component:RomaneskuComponent
  },
  {
    path:'coliflor',
    component:ColiflorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

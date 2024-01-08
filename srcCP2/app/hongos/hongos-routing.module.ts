import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampinonComponent } from './champinon/champinon.component';
import { GirgolaComponent } from './girgola/girgola.component';
import { SetaComponent } from './seta/seta.component';

const routes: Routes = [
  {
    path: 'champinon',
    component: ChampinonComponent
  },
  {
    path: 'girgola',
    component: GirgolaComponent
  },
  {
    path: 'seta',
    component: SetaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HongosRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PocetnaComponent} from './pocetna.component';


const routes: Routes = [
  {
    path: '',
    component: PocetnaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PocetnaRoutingModule { }

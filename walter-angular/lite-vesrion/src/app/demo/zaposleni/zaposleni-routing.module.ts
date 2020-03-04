import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ZaposleniListaComponent} from './zaposleni-lista/zaposleni-lista.component';


const routes: Routes = [
  {
    path: '',
    component: ZaposleniListaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZaposleniRoutingModule { }

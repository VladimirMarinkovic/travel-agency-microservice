import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {KorisniciComponent} from './korisnici-lista/korisnici.component';


const routes: Routes = [
  {
    path: '',
    component: KorisniciComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KorisniciRoutingModule { }

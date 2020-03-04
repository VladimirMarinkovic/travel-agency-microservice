import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PocetnaRoutingModule } from './pocetna-routing.module';
import {SharedModule} from '../../theme/shared/shared.module';
import {PocetnaComponent} from './pocetna.component';


@NgModule({
  declarations: [PocetnaComponent],

  imports: [
    CommonModule,
    PocetnaRoutingModule,
    SharedModule
  ],
})
export class PocetnaModule { }

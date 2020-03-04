import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZaposleniRoutingModule } from './zaposleni-routing.module';
import { ZaposleniListaComponent } from './zaposleni-lista/zaposleni-lista.component';
import {SharedModule} from '../../theme/shared/shared.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {
  MatCheckboxModule, MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule, MatRadioModule, MatSelectModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import {MaterialModule} from '../../theme/material/material.module';
import { ZaposleniFormaComponent } from './zaposleni-forma/zaposleni-forma.component';
import { ZaposleniFormaIzmenaComponent } from './zaposleni-forma-izmena/zaposleni-forma-izmena.component';
import { ZaposleniDialogComponent } from './zaposleni-dialog/zaposleni-dialog.component';


@NgModule({
  declarations: [ZaposleniListaComponent, ZaposleniFormaComponent, ZaposleniFormaIzmenaComponent, ZaposleniDialogComponent],
  imports: [
    CommonModule,
    ZaposleniRoutingModule,
    SharedModule,
    NgbDropdownModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MaterialModule,
    MatGridListModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule,
  ],
  entryComponents: [ZaposleniFormaComponent, ZaposleniFormaIzmenaComponent, ZaposleniDialogComponent]
})
export class ZaposleniModule { }

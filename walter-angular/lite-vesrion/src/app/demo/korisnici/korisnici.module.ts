import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KorisniciRoutingModule } from './korisnici-routing.module';
import {SharedModule} from '../../theme/shared/shared.module';
import {KorisniciComponent} from './korisnici-lista/korisnici.component';
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
import { KorisnikFormaComponent } from './korisnik-forma/korisnik-forma.component';
import { KorisnikFormaIzmenaComponent } from './korisnik-forma-izmena/korisnik-forma-izmena.component';
import { KorisnikDialogComponent } from './korisnik-dialog/korisnik-dialog.component';






@NgModule({
  declarations: [KorisniciComponent, KorisnikFormaComponent, KorisnikFormaIzmenaComponent, KorisnikDialogComponent],

  imports: [
    CommonModule,
    KorisniciRoutingModule,
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
    MatDialogModule
  ],
  entryComponents: [KorisnikFormaComponent, KorisnikFormaIzmenaComponent, KorisnikDialogComponent]
})
export class KorisniciModule { }

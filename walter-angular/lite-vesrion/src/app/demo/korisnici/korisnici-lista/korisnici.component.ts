import {Component, OnInit, ViewChild} from '@angular/core';
import {KorisniciService} from '../korisnici.service';
import {Observable} from 'rxjs';
import {KorisniciZahtev} from '../korisnici-zahtev';
import {Router} from '@angular/router';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {KorisnikFormaComponent} from '../korisnik-forma/korisnik-forma.component';
import {ZaposleniFormaIzmenaComponent} from '../../zaposleni/zaposleni-forma-izmena/zaposleni-forma-izmena.component';
import {ZaposleniDialogComponent} from '../../zaposleni/zaposleni-dialog/zaposleni-dialog.component';
import {KorisnikDialogComponent} from '../korisnik-dialog/korisnik-dialog.component';
import {KorisnikFormaIzmenaComponent} from '../korisnik-forma-izmena/korisnik-forma-izmena.component';



@Component({
  selector: 'app-korisnici',
  templateUrl: './korisnici.component.html',
  styleUrls: ['./korisnici.component.scss']
})
export class KorisniciComponent implements OnInit {

  korisnici: Observable<Array<KorisniciZahtev>>;

  constructor(private korisniciService: KorisniciService, private router: Router, private dialog: MatDialog) { }

  listData: MatTableDataSource<any>;

  displayedColumns: string[] = ['id', 'korisnickoIme', 'email', 'actions'];
  // @ts-ignore
  @ViewChild (MatSort) sort: MatSort;
  // @ts-ignore
  @ViewChild (MatPaginator) paginator: MatPaginator;
  searchKey: string;

  ngOnInit() {
      this.prikaziKorisnike();
  }


  prikaziKorisnike() {

    this.korisniciService.sviKorisnici().subscribe(
      list => {
        const array = list.map(item => {
          const id = item.id;
          const korisnickoIme = item.korisnickoIme;
          const email = item.email;
          return {
            $key: item.id,
            id,
            korisnickoIme,
            email
          };
        });
        this.listData = new MatTableDataSource(array);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
        this.listData.filterPredicate = (data, filter) => {
          return this.displayedColumns.some(ele => {
            return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
          });
        };

      });
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }
  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }


  registrujKorisnika() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(KorisnikFormaComponent, dialogConfig).afterClosed().subscribe(data => {
      this.prikaziKorisnike();
    });
  }

  izmeniKorisnika(korisnik) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    dialogConfig.data = {
      vrednostId: korisnik.id,
      vrednostKorisnickoIme: korisnik.korisnickoIme,
      vrednostEmail: korisnik.email,
    };
    this.dialog.open(KorisnikFormaIzmenaComponent, dialogConfig).afterClosed().subscribe(data => {
      this.prikaziKorisnike();
    });
  }


  obrisiKorisnika(korisnik) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '390px';
    dialogConfig.position = {top: '45px'};
    dialogConfig.data = {
      vrednostId: korisnik.id,
      vrednostKorisnickoIme: korisnik.korisnickoIme,
      vrednostEmail: korisnik.email,
    };
    this.dialog.open(KorisnikDialogComponent, dialogConfig).afterClosed().subscribe(data => {
      this.prikaziKorisnike();
    });
  }
}



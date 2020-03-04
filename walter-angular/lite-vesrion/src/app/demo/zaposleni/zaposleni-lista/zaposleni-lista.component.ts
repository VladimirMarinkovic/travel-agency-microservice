import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {ZaposleniListaZahtev} from './zaposleni-lista-zahtev';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ZaposleniService} from '../zaposleni.service';
import {ZaposleniFormaIzmenaComponent} from '../zaposleni-forma-izmena/zaposleni-forma-izmena.component';
import {ZaposleniFormaComponent} from '../zaposleni-forma/zaposleni-forma.component';
import {ZaposleniDialogComponent} from '../zaposleni-dialog/zaposleni-dialog.component';




@Component({
  selector: 'app-zaposleni-lista',
  templateUrl: './zaposleni-lista.component.html',
  styleUrls: ['./zaposleni-lista.component.scss']
})
export class ZaposleniListaComponent implements OnInit {

  zaposleni: Observable<Array<ZaposleniListaZahtev>>;


  constructor(private zaposleniService: ZaposleniService,
              private router: ActivatedRoute, private dialog: MatDialog,
              private changeDetectorRefs: ChangeDetectorRef) {  }

  //
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'ime', 'prezime', 'radnoMesto',  'email', 'actions'];
  // @ts-ignore
  @ViewChild (MatSort) sort: MatSort;
  // @ts-ignore
  @ViewChild (MatPaginator) paginator: MatPaginator;

  searchKey: string;




  ngOnInit() {

   this.prikaziZaposlene();
  }

  prikaziZaposlene() {

     this.zaposleniService.sviZaposleni().subscribe(
      list => {
        const array = list.map(item => {
          // const id = item.id.toString();
          const id = item.id;
          const ime = item.ime;
          const prezime = item.prezime;
          const email = item.email;
          const radnoMesto = item.radnoMesto;
          return {
            $key: item.id,
            id,
            ime,
            prezime,
            email,
            radnoMesto
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

  kreirajZaposlenog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(ZaposleniFormaComponent, dialogConfig).afterClosed().subscribe(data => {
      this.prikaziZaposlene();
    });
  }


  izmeniZaposlenog(radnik) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    dialogConfig.data = {
      vrednostId: radnik.id,
      vrednostIme: radnik.ime,
      vrednostPrezime: radnik.prezime,
      vrednostEmail: radnik.email,
      vrednostRadnoMesto: radnik.radnoMesto
    };
    this.dialog.open(ZaposleniFormaIzmenaComponent, dialogConfig).afterClosed().subscribe(data => {
      this.prikaziZaposlene();
    });
  }


  obrisiZaposlenog(radnik) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '390px';
    dialogConfig.position = {top: '45px'};
    dialogConfig.data = {
      vrednostId: radnik.id,
      vrednostIme: radnik.ime,
      vrednostPrezime: radnik.prezime,
      vrednostEmail: radnik.email,
      vrednostRadnoMesto: radnik.radnoMesto
    };
    this.dialog.open(ZaposleniDialogComponent, dialogConfig).afterClosed().subscribe(data => {
      this.prikaziZaposlene();
    });
  }


}

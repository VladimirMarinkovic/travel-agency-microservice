import {Component, Inject, OnInit, Optional} from '@angular/core';
import {ZaposleniIzmenaZahtev} from '../../zaposleni/zaposleni-forma-izmena/zaposleni-izmena-zahtev';
import {ZaposleniService} from '../../zaposleni/zaposleni.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {NotificationService} from '../../zaposleni/notification.service';
import {KorisniciService} from '../korisnici.service';
import {KorisnikIzmenaZahtev} from '../korisnik-forma-izmena/korisnik-izmena-zahtev';

@Component({
  selector: 'app-korisnik-dialog',
  templateUrl: './korisnik-dialog.component.html',
  styleUrls: ['./korisnik-dialog.component.scss']
})
export class KorisnikDialogComponent implements OnInit {

  zaposleniIzmenaZahtev: ZaposleniIzmenaZahtev;

  korisnikId: number;
  korisnikKorisnickoIme: string;
  korisnikEmail: string;
  pod: any;

  constructor(private korisniciService: KorisniciService, private router: Router,
              private route: ActivatedRoute, public dialogRef: MatDialogRef<KorisnikDialogComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public podaciDialog: KorisnikIzmenaZahtev,
              private notificationService: NotificationService) {
    console.log(podaciDialog);
    this.pod = {...podaciDialog};
    this.korisnikId = this.pod.vrednostId;
    this.korisnikKorisnickoIme = this.pod.vrednostKorisnickoIme;
    this.korisnikEmail = this.pod.vrednostEmail;
  }

  ngOnInit() {
  }

  zatvoriDialog() {
    this.dialogRef.close(false);
  }

  obrisiKorisnika(id) {
    this.korisniciService.obrisiKorisnika(id).subscribe(data => {
      console.log(data); console.log('Uspesno ste obrisali korisnika za id:' + id);
      this.zatvoriDialog();
      this.notificationService.warn(`Nalog korisnika: ${this.korisnikKorisnickoIme} je obrisan!`)
      this.router.navigateByUrl('/korisnici');
    }, error => {
      console.log('Neuspesno brisanje za id:' + id);
      this.router.navigateByUrl('/korisnici');
    });
  }
}

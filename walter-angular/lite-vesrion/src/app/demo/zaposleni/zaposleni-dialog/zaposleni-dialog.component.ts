import {Component, Inject, OnInit, Optional} from '@angular/core';
import {ZaposleniService} from '../zaposleni.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ZaposleniIzmenaZahtev} from '../zaposleni-forma-izmena/zaposleni-izmena-zahtev';
import {NotificationService} from '../notification.service';

@Component({
  selector: 'app-zaposleni-dialog',
  templateUrl: './zaposleni-dialog.component.html',
  styleUrls: ['./zaposleni-dialog.component.scss']
})
export class ZaposleniDialogComponent implements OnInit {

  zaposleniIzmenaZahtev: ZaposleniIzmenaZahtev;

  zaposleniId: number;
  zaposleniIme: string;
  zaposleniPrezime: string;
  zaposleniEmail: string;
  zaposleniRadnoMesto: string;
  pod: any;

  constructor(private zaposleniService: ZaposleniService, private router: Router,
              private route: ActivatedRoute, public dialogRef: MatDialogRef<ZaposleniDialogComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public podaciDialog: ZaposleniIzmenaZahtev,
              private notificationService: NotificationService) {
    console.log(podaciDialog);
    this.pod = {...podaciDialog};
    this.zaposleniId = this.pod.vrednostId;
    this.zaposleniIme = this.pod.vrednostIme;
    this.zaposleniPrezime = this.pod.vrednostPrezime;
    this.zaposleniEmail = this.pod.vrednostEmail;
    this.zaposleniRadnoMesto = this.pod.vrednostRadnoMesto;
  }

  ngOnInit() {
  }

  zatvoriDialog() {
    this.dialogRef.close(false);
  }

  obrisiZaposlenog(id) {
    this.zaposleniService.obrisiZaposlenog(id).subscribe(data => {
      console.log(data); console.log('Uspesno ste obrisali zaposlenog za id:' + id);
      this.zatvoriDialog();
      this.notificationService.warn(`Nalog zaposlenog: ${this.zaposleniPrezime} je obrisan!`)
      this.router.navigateByUrl('/zaposleni');
    }, error => {
      console.log('Neuspesno brisanje za id:' + id);
      this.router.navigateByUrl('/zaposleni');
    });
  }
}

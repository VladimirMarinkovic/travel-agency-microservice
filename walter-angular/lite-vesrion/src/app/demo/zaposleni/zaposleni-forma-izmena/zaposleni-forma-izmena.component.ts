import {ChangeDetectorRef, Component, Inject, OnInit, Optional} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ZaposleniZahtev} from '../zaposleni-forma/zaposleni-zahtev';
import {ZaposleniService} from '../zaposleni.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ZaposleniIzmenaZahtev} from './zaposleni-izmena-zahtev';
import {NotificationService} from '../notification.service';

@Component({
  selector: 'app-zaposleni-forma-izmena',
  templateUrl: './zaposleni-forma-izmena.component.html',
  styleUrls: ['./zaposleni-forma-izmena.component.scss']
})
export class ZaposleniFormaIzmenaComponent implements OnInit {


  zaposleniFormaIzmena: FormGroup;
  zaposleniIzmenaZahtev: ZaposleniIzmenaZahtev;

  zaposleniId: number;
  zaposleniIme: string;
  zaposleniPrezime: string;
  zaposleniEmail: string;
  zaposleniRadnoMesto: string;
  pod: any;

  constructor(private  formBuilder: FormBuilder, private  zaposleniService: ZaposleniService,
              private router: Router, private route: ActivatedRoute,
              public dialogRef: MatDialogRef<ZaposleniFormaIzmenaComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public podaciDialog: ZaposleniIzmenaZahtev,
              private  notificationService: NotificationService) {
    console.log(podaciDialog);
    this.pod = {...podaciDialog};
    this.zaposleniId = this.pod.vrednostId;
    this.zaposleniIme = this.pod.vrednostIme;
    this.zaposleniPrezime = this.pod.vrednostPrezime;
    this.zaposleniEmail = this.pod.vrednostEmail;
    this.zaposleniRadnoMesto = this.pod.vrednostRadnoMesto;

  }

  ngOnInit() {
    this.popuniFormu();

  }

  popuniFormu() {
    this.zaposleniFormaIzmena = this.formBuilder.group({
      id: this.zaposleniId,
      ime: [this.zaposleniIme, [Validators.required, Validators.minLength(2)]],
      prezime: [this.zaposleniPrezime, [Validators.required, Validators.minLength(2)]],
      email: [this.zaposleniEmail, Validators.email],
      radnoMesto: [this.zaposleniRadnoMesto, [Validators.required, Validators.minLength(2)]],
    });
    this.zaposleniIzmenaZahtev = {
      id: this.zaposleniId,
      ime: this.zaposleniIme,
      prezime: this.zaposleniPrezime,
      email: this.zaposleniEmail,
      radnoMesto: this.zaposleniRadnoMesto,
    };
  }

  izmeniZaposlenog() {
    this.zaposleniIzmenaZahtev.id = this.zaposleniFormaIzmena.get('id').value;
    this.zaposleniIzmenaZahtev.ime = this.zaposleniFormaIzmena.get('ime').value;
    this.zaposleniIzmenaZahtev.prezime = this.zaposleniFormaIzmena.get('prezime').value;
    this.zaposleniIzmenaZahtev.email = this.zaposleniFormaIzmena.get('email').value;
    this.zaposleniIzmenaZahtev.radnoMesto = this.zaposleniFormaIzmena.get('radnoMesto').value;

    this.zaposleniService.izmeniZaposlenog(this.zaposleniIzmenaZahtev.id, this.zaposleniIzmenaZahtev).subscribe(data => {
      console.log(data); console.log('Uspesno ste izmenili zaposlenog');
      this.zatvoriFormu();
      this.notificationService.success(`Nalog zaposlenog: ${this.zaposleniPrezime} je izmenjen!`);
      this.router.navigateByUrl('/zaposleni');
    }, error => {
      console.log('Neuspesno izmena zaposlenog za id:' + this.zaposleniIzmenaZahtev.id);
      this.router.navigateByUrl('/zaposleni');
    });
  }

  zatvoriFormu() {
    this.zaposleniFormaIzmena.reset();
    this.popuniFormu();
    this.dialogRef.close();
  }

  obrisiUneseno() {
    this.zaposleniFormaIzmena.reset();
  }



}




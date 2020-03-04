import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ZaposleniZahtev} from './zaposleni-zahtev';
import {ZaposleniService} from '../zaposleni.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialogRef} from '@angular/material';
import {NotificationService} from '../notification.service';


@Component({
  selector: 'app-zaposleni-forma',
  templateUrl: './zaposleni-forma.component.html',
  styleUrls: ['./zaposleni-forma.component.scss']
})
export class ZaposleniFormaComponent implements OnInit {

  zaposleniForma: FormGroup;
  zaposleniZahtev: ZaposleniZahtev;



  constructor(private  formBuilder: FormBuilder, private  zaposleniService: ZaposleniService,
              private router: Router, private route: ActivatedRoute,
              private notificationService: NotificationService,
              public dialogRef: MatDialogRef<ZaposleniFormaComponent>) {
  }

  postaviFormu() {
    this.zaposleniForma = this.formBuilder.group({
      ime:  ['', [Validators.required, Validators.minLength(2)]],
      prezime:  ['', [Validators.required, Validators.minLength(2)]],
      email:  ['', [Validators.email]],
      radnoMesto: ['', [Validators.required,  Validators.minLength(2)]]
    });
    this.zaposleniZahtev = {
      ime: '',
      prezime: '',
      email: '',
      radnoMesto: ''
    };
  }



  ngOnInit() {

    this.postaviFormu();

  }

  reistrujZaposlenog() {
    this.zaposleniZahtev.ime = this.zaposleniForma.get('ime').value;
    this.zaposleniZahtev.prezime = this.zaposleniForma.get('prezime').value;
    this.zaposleniZahtev.email = this.zaposleniForma.get('email').value;
    this.zaposleniZahtev.radnoMesto = this.zaposleniForma.get('radnoMesto').value;

    this.zaposleniService.registrujZaposlenog(this.zaposleniZahtev).subscribe(data => {
      console.log('Uspesno ste registrovali zaposlenog');
      this.zatvoriFormu();
      this.notificationService.primary('Uspesno ste dodali zaposlenog!');
      this.router.navigateByUrl('/zaposleni');
    }, error => {
      console.log('Registracija zaposlenog neuspesna!');
      this.router.navigateByUrl('/zaposleni');
    });
  }

  zatvoriFormu() {
    this.zaposleniForma.reset();
    this.dialogRef.close();
  }

  obrisiUneseno() {
    this.zaposleniForma.reset()
    this.postaviFormu();

  }

}

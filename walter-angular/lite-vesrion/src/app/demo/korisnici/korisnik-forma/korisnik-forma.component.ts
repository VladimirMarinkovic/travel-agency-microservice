import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {NotificationService} from '../../zaposleni/notification.service';
import {MatDialogRef} from '@angular/material';
import {KorisniciService} from '../korisnici.service';
import {KorisnikZahtev} from './korisnik-zahtev';

@Component({
  selector: 'app-korisnik-forma',
  templateUrl: './korisnik-forma.component.html',
  styleUrls: ['./korisnik-forma.component.scss']
})
export class KorisnikFormaComponent implements OnInit {


  korisnikForma: FormGroup;
  korisnikZahtev: KorisnikZahtev;

  constructor(private  formBuilder: FormBuilder, private korisniciService: KorisniciService,
              private router: Router, private route: ActivatedRoute,
              private notificationService: NotificationService,
              public dialogRef: MatDialogRef<KorisnikFormaComponent>) { }



  postaviFormu() {
    this.korisnikForma = this.formBuilder.group({
      korisnickoIme:  ['', [Validators.required, Validators.minLength(2)]],
      email:  ['', [Validators.email]],
      lozinka: ['', [Validators.required,  Validators.minLength(2)]]
    });
    this.korisnikZahtev = {
      korisnickoIme: '',
      email: '',
      lozinka: ''
    };
  }


  ngOnInit() {
    this.postaviFormu();
  }




  registrujKorisnika() {
    this.korisnikZahtev.korisnickoIme = this.korisnikForma.get('korisnickoIme').value;
    this.korisnikZahtev.email = this.korisnikForma.get('email').value;
    this.korisnikZahtev.lozinka = this.korisnikForma.get('lozinka').value;

    this.korisniciService.registrujKorisnika(this.korisnikZahtev).subscribe(data => {
      console.log('Uspesno ste registrovali zaposlenog');
      this.zatvoriFormu();
      this.notificationService.primary('Uspesno ste registrovali korisnika!');
      this.router.navigateByUrl('/korisnici');
    }, error => {
      console.log('Registracija korisnika neuspesna!');
      this.router.navigateByUrl('/korisnici');
    });
  }

  zatvoriFormu() {
    this.korisnikForma.reset();
    this.dialogRef.close();
  }

  obrisiUneseno() {
    this.korisnikForma.reset()
    this.postaviFormu();

  }

}

import {Component, Inject, OnInit, Optional} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {NotificationService} from '../../zaposleni/notification.service';
import {KorisniciService} from '../korisnici.service';
import {KorisnikIzmenaZahtev} from './korisnik-izmena-zahtev';

@Component({
  selector: 'app-korisnik-forma-izmena',
  templateUrl: './korisnik-forma-izmena.component.html',
  styleUrls: ['./korisnik-forma-izmena.component.scss']
})
export class KorisnikFormaIzmenaComponent implements OnInit {


  korisnikFormaIzmena: FormGroup;
  korisnikIzmenaZahtev: KorisnikIzmenaZahtev;

  korisnikId: number;
  korisnikKorisnickoIme: string;
  korisnikEmail: string;
  pod: any;


  constructor(private  formBuilder: FormBuilder, private  korisniciService: KorisniciService,
              private router: Router, private route: ActivatedRoute,
              public dialogRef: MatDialogRef<KorisnikFormaIzmenaComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public podaciDialog: KorisnikIzmenaZahtev,
              private  notificationService: NotificationService) {
    console.log(podaciDialog);
    this.pod = {...podaciDialog};
    this.korisnikId = this.pod.vrednostId;
    this.korisnikKorisnickoIme = this.pod.vrednostKorisnickoIme;
    this.korisnikEmail = this.pod.vrednostEmail;

  }

  ngOnInit() {
    this.popuniFormu();
  }



  popuniFormu() {
    this.korisnikFormaIzmena = this.formBuilder.group({
      id: this.korisnikId,
      korisnickoIme: [this.korisnikKorisnickoIme, [Validators.required, Validators.minLength(2)]],
      email: [this.korisnikEmail, Validators.email],
    });
    this.korisnikIzmenaZahtev = {
      id: this.korisnikId,
      korisnickoIme: this.korisnikKorisnickoIme,
      email: this.korisnikEmail,
    };
  }



  izmeniKorisnika() {
    this.korisnikIzmenaZahtev.id = this.korisnikFormaIzmena.get('id').value;
    this.korisnikIzmenaZahtev.korisnickoIme = this.korisnikFormaIzmena.get('korisnickoIme').value;
    this.korisnikIzmenaZahtev.email = this.korisnikFormaIzmena.get('email').value;

    this.korisniciService.izmeniKorisnika(this.korisnikIzmenaZahtev.id, this.korisnikIzmenaZahtev).subscribe(data => {
      console.log(data); console.log('Uspesno ste izmenili korisnika');
      this.zatvoriFormu();
      this.notificationService.success(`Nalog korisnika: ${this.korisnikKorisnickoIme} je izmenjen!`);
      this.router.navigateByUrl('/korisnici');
    }, error => {
      console.log('Neuspesno izmena korisnika za id:' + this.korisnikIzmenaZahtev.id);
      this.router.navigateByUrl('/korisnici');
    });
  }

  zatvoriFormu() {
    this.korisnikFormaIzmena.reset();
    this.popuniFormu();
    this.dialogRef.close();
  }

  obrisiUneseno() {
    this.korisnikFormaIzmena.reset();
  }

}

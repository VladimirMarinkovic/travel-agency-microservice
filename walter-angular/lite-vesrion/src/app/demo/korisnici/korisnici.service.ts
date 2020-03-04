import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {KorisniciZahtev} from './korisnici-zahtev';
import {Observable} from 'rxjs';
import {KorisnikZahtev} from './korisnik-forma/korisnik-zahtev';


@Injectable({
  providedIn: 'root'
})
export class KorisniciService {


  // private url = 'http://localhost:8081/korisnici/';
  // zuul
  private url = 'http://localhost:8080/auth-service/korisnici/';


  constructor(private  httpClient: HttpClient) { }

  sviKorisnici(): Observable<Array<KorisniciZahtev>> {
    return  this.httpClient.get<Array<KorisniciZahtev>>(this.url + 'svi-korisnici' );
  }

  registrujKorisnika(korisnikZahtev: KorisnikZahtev): Observable<any> {
    return this.httpClient.post(this.url + 'registruj-korisnika', korisnikZahtev);
  }


  izmeniKorisnika(id, korisnikIzmenaZahtev) {
    return this.httpClient.put(this.url + `${id}`, korisnikIzmenaZahtev);
  }

  obrisiKorisnika(id) {
    return this.httpClient.delete(this.url + `${id}`);
    console.log('Uspeno ste obrisali korisnika za id: ' + id);
  }




}

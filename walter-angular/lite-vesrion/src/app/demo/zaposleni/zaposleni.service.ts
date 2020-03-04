import {Injectable, ViewChild, ViewChildren} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ZaposleniListaZahtev} from './zaposleni-lista/zaposleni-lista-zahtev';
import {ZaposleniZahtev} from './zaposleni-forma/zaposleni-zahtev';
import {ZaposleniIzmenaZahtev} from './zaposleni-forma-izmena/zaposleni-izmena-zahtev';

@Injectable({
  providedIn: 'root'
})
export class ZaposleniService {


  // private url = 'http://localhost:8085/zaposleni/';
  // zuul
  private url = 'http://localhost:8080/zaposleni-resource-server/zaposleni/';

  constructor(private  httpClient: HttpClient) { }

  sviZaposleni(): Observable<Array<ZaposleniListaZahtev>> {
    return  this.httpClient.get<Array<ZaposleniListaZahtev>>(this.url + 'svi-zaposleni');
  }

  registrujZaposlenog(zaposleniZahtev: ZaposleniZahtev): Observable<any> {
    return this.httpClient.post(this.url + 'registruj-zaposlenog', zaposleniZahtev);
  }


  zaposleniZaId(id) {
    return this.httpClient.get<ZaposleniIzmenaZahtev>(this.url + `${id}`);
  }

  izmeniZaposlenog(id, zaposleniIzmenaZahtev) {
    return this.httpClient.put(this.url + `${id}`, zaposleniIzmenaZahtev);
    console.log('SERVIS:' + id);
  }

  obrisiZaposlenog(id) {
    console.log('SERVIS:' + id);
    return this.httpClient.delete(this.url + `${id}`);
    console.log('Uspeno ste obrisali zaposlenog za id: ' + id);
  }

}

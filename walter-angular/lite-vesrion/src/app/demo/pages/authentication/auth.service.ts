import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {RegistracijaZahtev} from './registracija-zahtev';
import {Observable} from 'rxjs';
import {LoginZahtev} from './login-zahtev';
import {JwtAuthResponse} from './jwt-auth-response';
import {find, map} from 'rxjs/operators';
import {LocalStorageService} from 'ngx-webstorage';
import {stringify} from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private url = 'http://localhost:8081/oauth/token';
  // zuul
  private url = 'http://localhost:8080/auth-service/oauth/token';

  // private urlreg = ' http://localhost:8081/korisnici/registruj-korisnika';
  // zuul
  private urlreg = ' http://localhost:8080/auth-service/korisnici/registruj-korisnika';


  constructor(private httpClient: HttpClient, private localStoraqeService: LocalStorageService) { }



  registracija(registracijaZahtev: RegistracijaZahtev): Observable<any> {

    return this.httpClient.post(this.urlreg, registracijaZahtev);
  }



  login(loginZahtev: LoginZahtev): Observable<boolean> {

    const headers = {
      'Authorization': 'Basic ' + btoa('angular-client:angular-secret'),
      'Content-type': 'application/x-www-form-urlencoded'
    }

    const body = new HttpParams()
      .set('username', loginZahtev.username)
      .set('password', loginZahtev.password)
      .set('grant_type', 'password');

    return this.httpClient.post<JwtAuthResponse>(this.url, body, {headers}).pipe(map(data => {
      this.localStoraqeService.store('access_token', data['access_token']);
      this.localStoraqeService.store('username', loginZahtev.username);
      // window.sessionStorage.setItem('access_token', this.saveToken(data));
      console.log(data);
      console.log('TOKEN ' + this.localStoraqeService.retrieve('access_token'));
      return true;
    }));
  }




  isAuthenticated(): boolean {
    console.log('PROVERA');
    return this.localStoraqeService.retrieve('access_token') != null;
    // return window.sessionStorage.getItem('token') != null;

  }


  logout() {
    this.localStoraqeService.clear('access_token');
    this.localStoraqeService.clear('username');
    // window.sessionStorage.clear();
  }
}

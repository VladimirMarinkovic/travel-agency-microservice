import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../../demo/pages/authentication/auth.service';
import {Router} from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.scss']
})
export class NavLeftComponent implements OnInit {

  constructor(private authService: AuthService, private  router: Router, private localStoraqeService: LocalStorageService) { }

  korisnikKorisnickoIme: string;

  ngOnInit() {
    this.korisnikKorisnickoIme = this.localStoraqeService.retrieve('username');
  }

  logout() {
    this.authService.logout();
    console.log('Uspesno ste se izlogovali!');
    this.router.navigateByUrl('/auth/signin');
  }


}

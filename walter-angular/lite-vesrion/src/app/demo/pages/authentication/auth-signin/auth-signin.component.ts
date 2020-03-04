import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginZahtev} from '../login-zahtev';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export class AuthSigninComponent implements OnInit {

  loginForm: FormGroup;
  loginZahtev: LoginZahtev;

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
    this.loginZahtev = {
      username: '',
      password: ''
    };
  }

  ngOnInit() {
  }

  onSubmit() {
    this.loginZahtev.username = this.loginForm.get('username').value;
    this.loginZahtev.password = this.loginForm.get('password').value;

    this.authService.login(this.loginZahtev).subscribe(data => {
      if (data) {
        console.log('Uspesno ste se ulogovali!');
        this.router.navigateByUrl('/pocetna');
      } else {
        console.log('Neuspesna prijava na sistem!');
        this.router.navigateByUrl('/auth/signin');
      }
    });
  }
}

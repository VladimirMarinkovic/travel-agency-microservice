import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {


  constructor(public snackBar: MatSnackBar) { }

  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
  }

  // config2: MatSnackBarConfig = {
  //   duration: 3000,
  //   horizontalPosition: 'right',
  //   verticalPosition: 'top',
  //   panelClass: ['mat-toolbar', 'mat-warn']
  //
  // }

  primary(msg) {
    this.config ['panelClass'] = ['notification', 'primary'];
    this.snackBar.open(msg, '', this.config);
  }

  success(msg) {
    this.config ['panelClass'] = ['notification', 'success'];
    this.snackBar.open(msg, '', this.config);
  }

  warn(msg) {
    this.config['panelClass'] = ['notification', 'warn'];
    this.snackBar.open(msg, '', this.config);
  }
}

import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}

  public openSnackBar(message: string, config: MatSnackBarConfig<any>) {
    this.snackBar.open(message, '', config);
  }
}

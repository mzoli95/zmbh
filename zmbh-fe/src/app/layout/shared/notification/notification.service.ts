import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { NotificationType } from '../mzbh.enums';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}

  public openSnackBar(message: string, type: NotificationType) {
    let config = new MatSnackBarConfig();
    config.duration = 10000;
    config.horizontalPosition = 'right';
    config.panelClass = [`notification-service-${type}`];
    const iconTemplate = `<mat-icon
    aria-hidden="false"
    aria-label="Example home icon"
    fontIcon="home"
  ></mat-icon>`;
    this.snackBar.open(iconTemplate + message, '', config);
  }
}

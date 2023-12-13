import { Component } from '@angular/core';
import { NotificationService } from '../../shared/notification/notification.service';
import { MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private notificationService: NotificationService) {}

  openSnackbar() {
    let config = new MatSnackBarConfig();
    config.duration = 10000;
    config.horizontalPosition = 'right';
    config.panelClass = ['notification-service'];
    this.notificationService.openSnackBar('Ez egy üzenet!', config);
  }
}

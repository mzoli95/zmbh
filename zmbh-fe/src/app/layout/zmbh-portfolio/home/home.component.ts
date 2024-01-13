import { Component } from '@angular/core';
import { NotificationService } from '../../shared/notification/notification.service';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { NotificationType } from '../../shared/mzbh.enums';

@Component({
  selector: 'app-mzbh-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private notificationService: NotificationService) {}

  notificationTypeEnum = NotificationType;

  notification(type: NotificationType) {
    console.log(type);
    this.notificationService.openSnackBar('Ez egy üzenet!', type);
  }
}

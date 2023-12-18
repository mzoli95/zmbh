import { Component } from '@angular/core';
import { NotificationService } from '../../shared/notification/notification.service';

import { NotificationType } from '../../shared/mzbh.enums';

@Component({
  selector: 'app-mzbh-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  constructor(private notificationService: NotificationService) {}


  notificationTypeEnum = NotificationType;

  notification(type: NotificationType) {
    console.log(type);
    this.notificationService.openSnackBar('Ez egy üzenet!', type);
  }
}

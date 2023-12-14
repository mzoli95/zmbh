import { Component } from '@angular/core';
import { NotificationService } from '../../shared/notification/notification.service';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { NotificationType } from '../../shared/mzbh.enums';

@Component({
  selector: 'app-mzbh-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  constructor(private notificationService: NotificationService) {}

  contactForm = new UntypedFormGroup({
    name: new UntypedFormControl(null, Validators.required),
    email: new UntypedFormControl(null, [
      Validators.required,
      Validators.email,
    ]),
    message: new UntypedFormControl(null, Validators.required),
  });
  notificationTypeEnum = NotificationType;

  notification(type: NotificationType) {
    console.log(type);
    this.notificationService.openSnackBar('Ez egy üzenet!', type);
  }
}

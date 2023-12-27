import { Component, Type } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { NotificationService } from '../../../shared/notification/notification.service';
import { NotificationType } from '../../../shared/mzbh.enums';
import { ErrorStateMatcher } from '@angular/material/core';
import { Store } from '@ngrx/store';
import * as ContactFormActions from '../+state/contact.actions';
import { updateContactFormField } from '../+state/contact.actions';
import { mzbhEmailValidator } from '../../../shared/validator/mzbh-email.validator';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-mzbh-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  constructor(private store: Store) {}
  matcher = new MyErrorStateMatcher();

  controls: any = {
    name: new UntypedFormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new UntypedFormControl(null, [
      Validators.required,
      mzbhEmailValidator,
    ]),
    message: new UntypedFormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
  };
  form: UntypedFormGroup = new UntypedFormGroup(this.controls);

  notificationTypeEnum = NotificationType;

  ngOnInit() {
    this.form.valueChanges.subscribe((values) => {
      this.store.dispatch(updateContactFormField({ value: values }));
    });
  }
  sendEmail() {
    this.store.dispatch(ContactFormActions.submitEmail());
  }
}

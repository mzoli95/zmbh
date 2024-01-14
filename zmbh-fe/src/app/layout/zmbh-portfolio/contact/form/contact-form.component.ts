import { Component, Type } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Store } from '@ngrx/store';
import * as ContactFormActions from '../+state/contact.actions';
import { updateContactFormField } from '../+state/contact.actions';
import { mzbhEmailValidator } from '../../../shared/validator/mzbh-email.validator';
import { ContactState } from '../+state/contact.reducer';
import { MyErrorStateMatcher } from '../../../shared/errorStateMatcher';

type ContactUsForm = Record<keyof ContactState, FormControl>;

@Component({
  selector: 'app-mzbh-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  constructor(private store: Store) {}
  matcher = new MyErrorStateMatcher();

  contactUsFormControls: ContactUsForm = {
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl(null, [
      Validators.required,
      mzbhEmailValidator,
    ]),
    message: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
    ]),
  };
  form = new FormGroup(this.contactUsFormControls);

  ngOnInit() {
    this.form.valueChanges.subscribe((values) => {
      this.store.dispatch(updateContactFormField({ value: values }));
    });
  }
  sendEmail() {
    this.store.dispatch(ContactFormActions.submitEmail());
  }
}

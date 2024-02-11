import { Component } from '@angular/core';
import { FormControl, FormGroup,  Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { mzbhEmailValidator } from '../../layout/shared/validator/mzbh-email.validator';
import { mzbhSpecialCharValidator } from '../../layout/shared/validator/mzbh-special-char.validator';
import * as AuthFormActions from '../+state/auth.actions';
import { SubscriptionManager } from '../../layout/shared/subscriptionManager';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent extends SubscriptionManager {
  constructor(private store: Store) {
    super();
  }

  hide = true;

  controls:any =  {
    name: new FormControl(null, [Validators.required,      Validators.minLength(3)]),
    username: new FormControl(null, [Validators.required,      Validators.minLength(3)]),
    email: new FormControl(null, [Validators.required, mzbhEmailValidator]),
    password: new FormControl(null,[Validators.required,Validators.minLength(8), mzbhSpecialCharValidator]),
  };
  form:any = new FormGroup(this.controls);

  ngOnInit() {
    this.addSubscriptions(
      this.form.valueChanges.subscribe((values: any) => {
        this.store.dispatch(AuthFormActions.updateRegisterUser({ value: values }));
      })
  );

  }

  registerUser(){
    this.store.dispatch(AuthFormActions.registerUser());
  }
}

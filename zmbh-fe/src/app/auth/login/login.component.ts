import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Store, select } from '@ngrx/store';
import * as AuthFormActions from '../+state/auth.actions';
import * as AuthSelectors from '../+state/auth.selectors';
import { LoginFormState } from '../+state/auth.reducer';
import { delay, take } from 'rxjs';
import { SubscriptionManager } from '../../layout/shared/subscriptionManager';
import { LoadingService } from '../../layout/shared/loading.service';

type LoginForm = Record<keyof LoginFormState, FormControl>;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent extends SubscriptionManager {
  constructor(private store: Store, private loadingService: LoadingService) {
    super();
  }

  hide = true;

  loginFormControls: LoginForm = {
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  };
  form = new FormGroup(this.loginFormControls);

  ngOnInit() {
    //TODO majd újra gondolni, így egy pillanatra a google autofill befigyel. Illetve, annyira nem fontos kód
    this.store
      .pipe(select(AuthSelectors.selectLoginInitState), take(1), delay(1000))
      .subscribe((loginFormState: LoginFormState) => {
        this.form.patchValue(loginFormState);
      });

      this.addSubscriptions(
        this.form.valueChanges.subscribe((data)=>{
          this.store.dispatch(AuthFormActions.updateLoginUser({ value: data }));

        })
      );
  }

  
  loginUser(){
    this.loadingService.loadingOn();
    this.store.dispatch(AuthFormActions.loginUser());
  }
}

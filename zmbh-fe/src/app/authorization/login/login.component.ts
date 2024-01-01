import { Component } from '@angular/core';
import { FormControl, FormGroup, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import * as AuthActions from '../+state/auth.actions';
import * as AuthSelectors from '../+state/auth.selectors';
import { LoginFormState } from '../+state/auth.reducer';
import { delay, take } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private store: Store) {}

  hide = true;

  controls:any =  {
    username: new FormControl(null, Validators.required),
    password: new FormControl(null,Validators.required),
  };
  form:any = new FormGroup(this.controls);

  ngOnInit() {
    //TODO majd újra gondolni, így egy pillanatra a google autofill befigyel. Illetve, annyira nem fontos kód
    this.store.pipe(select(AuthSelectors.selectLoginInitState),take(1),delay(1000)).subscribe((loginFormState : LoginFormState) => {
      this.form.patchValue(loginFormState);
    });


  }
}

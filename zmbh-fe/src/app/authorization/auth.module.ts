import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../layout/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import {
  AUTH_FORM_FEATURE_KEY,
  authFormInitialState,
  authFormReducer,
} from './+state/auth.reducer';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    MatCardModule,
    MatTabsModule,
    SharedModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    StoreModule.forFeature(AUTH_FORM_FEATURE_KEY, authFormReducer, {
      initialState: authFormInitialState,
    }),
  ],
  exports: [],
})
export class AuthModule {}

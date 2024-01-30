import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export const AUTH_FORM_FEATURE_KEY = 'auth';

export interface LoginFormState {
  username: string;
  password: string;
}
export interface RegisterFormState {
  username: string;
  name: string;
  email: string;
  password: string;
}
export interface AuthFormState {
  auth: {
    loginForm: LoginFormState;
    registerForm: RegisterFormState;
    isLoggedIn: boolean;
    email: string;
    id: string;
    _token: string;
    _tokenExpirationDate: Date;
  };
}
export const authFormInitialState: AuthFormState = {
  auth: {
    loginForm: {
      username: '',
      password: '',
    },
    registerForm: {
      username: '',
      name: '',
      email: '',
      password: '',
    },
    isLoggedIn: false,
    _token: '',
    _tokenExpirationDate: new Date(),
    email: '',
    id: '',
  },
};
export const authFormReducer = createReducer(
  authFormInitialState,
  on(AuthActions.updateRegisterUser, (state, { value }) => ({
    ...state,
    auth: {
      ...state.auth,
      registerForm: value,
    },
  })),
  on(AuthActions.updateLoginUser, (state, { value }) => ({
    ...state,
    auth: {
      ...state.auth,
      loginForm: value,
    },
  })),

  on(AuthActions.emptyLoginForm, (state) => {
    console.log('teszt');
    console.log(state);
    return {
      ...state,
      auth: {
        ...state.auth,
        loginForm: {
          ...state.auth.loginForm,
          authFormInitialState,
        },
      },
    };
  })
);

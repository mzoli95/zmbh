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
    loginForm: LoginFormState,
    registerForm: RegisterFormState,
    isLoggedIn: boolean;
  };
}
export const authFormInitialState: AuthFormState = {
    auth: {
        loginForm:{
            username: '',
            password: '',
        },
        registerForm:{
            username: '',
            name: '',
            email: '',
            password: ''
        },
        isLoggedIn: false
      }
};
export const authFormReducer = createReducer(
    authFormInitialState,
  on(AuthActions.emptyLoginForm, (state) => {
    console.log("teszt")
    console.log(state)
    return {
        ...state,
        auth:{
            ...state.auth,
            loginForm:{
                ...state.auth.loginForm,
                authFormInitialState
            }
        }
      }
  }
  
  

  ),

);

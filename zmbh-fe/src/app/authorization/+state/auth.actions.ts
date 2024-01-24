import { createAction, props } from '@ngrx/store';

export const emptyLoginForm = createAction('[Auth] Empty Login Form');

export const loginningUser = createAction(
  '[Auth] Login User',
  props<{ value: any }>()
);

export const loginningUserSuccess = createAction('[Auth] Login User Success');
export const loginningUserError = createAction(
  '[Auth] Login User Error',
  props<{ error: any }>()
);

export const registerUser = createAction('[Auth] Register User');
export const registerUserSuccess = createAction('[Auth] Register User Success');
export const registerUserError = createAction(
  '[Auth] Register User Error',
  props<{ error: any }>()
);
